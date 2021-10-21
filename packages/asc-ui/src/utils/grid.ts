import { withTheme, getValueFromTheme } from './themeUtils'
import { Theme } from '../types'

/**
 * Get the value for the maximum width of the grid
 */
export const maxWidth = withTheme<[boolean?]>(
  (theme, withUnit = false): number | string => {
    const gridWidthValue = getValueFromTheme('maxGridWidth')({ theme })

    if (Number.isNaN(parseInt(gridWidthValue, 10))) {
      throw new Error(
        "Your theme configuration does not seem to have a value for 'maxGridWidth'",
      )
    }

    if (withUnit) {
      return `${gridWidthValue}px`
    }

    return gridWidthValue
  },
)

/**
 * Get the amount of column for a specific layout
 */
export const columns = withTheme<[string]>((theme, layoutId): number => {
  const colCount = getValueFromTheme(`layouts.${layoutId}.columns`)({ theme })

  if (Number.isNaN(parseInt(colCount, 10))) {
    throw new Error(
      `Requesting a value from layout '${layoutId}' that is not defined or doesn't have a 'columns' prop`,
    )
  }

  return colCount
})

/**
 * Get the gutter width for a specific layout
 */
export const gutter = withTheme<[string, boolean?]>(
  (theme, layoutId: string, withUnit = false): string | number => {
    const gutterValue =
      getValueFromTheme(`layouts.${layoutId}.gutter`)({ theme }) || 0

    if (withUnit) {
      return `${gutterValue}px`
    }

    return gutterValue
  },
)

/**
 * Get the margin width for a specific layout
 */
export const margin = withTheme<[string, boolean?]>(
  (theme, layoutId: string, withUnit = false): string | number => {
    const marginValue =
      getValueFromTheme(`layouts.${layoutId}.margin`)({ theme }) || 0

    if (withUnit) {
      return `${marginValue}px`
    }

    return marginValue
  },
)

/**
 * Get the min-width breakpoint value for a specific layout
 */
export const min = withTheme<[string, boolean?]>(
  (theme, layoutId: string, withUnit = false): string | number | undefined => {
    const minValue = getValueFromTheme(`layouts.${layoutId}.min`)({ theme })
    if (minValue >= 0) {
      if (withUnit) {
        return `${minValue}px`
      }

      return minValue
    }

    return undefined
  },
)

/**
 * Get the max-width breakpoint value for a specific layout
 */
export const max = withTheme<[string, boolean?, boolean?]>(
  (
    theme,
    layoutId: string,
    withUnit = false,
    noConflict = false,
  ): string | number | undefined => {
    let maxValue = getValueFromTheme(`layouts.${layoutId}.max`)({ theme })
    maxValue += noConflict ? -1 : 0
    if (maxValue > 0) {
      if (withUnit) {
        return `${maxValue}px`
      }

      return maxValue
    }

    return undefined
  },
)

/**
 * Get the sum of the gutters for the entire grid
 */
export const gridGutterWidth = withTheme<[string, boolean?]>(
  (theme, layoutId: string, withUnit = false): string | number => {
    const cols = columns(layoutId)({ theme })
    const gutterWidthValue = <number>gutter(layoutId)({ theme })
    const value = (cols - 1) * gutterWidthValue

    if (withUnit) {
      return `${value}px`
    }

    return value
  },
)

/**
 * Get the width of all gutters in a set of columns
 */
export const spanGutterWidth = withTheme<[string, number, boolean?]>(
  (theme, layoutId, span, withUnit?): number | string => {
    if (span <= 0) {
      return 0
    }

    const gutterWidthValue = <number>gutter(layoutId)({ theme })
    const value = (span - 1) * gutterWidthValue

    if (withUnit) {
      return `${value}px`
    }

    return value
  },
)

/**
 * Get the width of all gutters in a set of columns
 */
export const pushGutterWidth = withTheme<[string, number, boolean?]>(
  (theme, layoutId, push, withUnit): number | string => {
    if (push <= 0) {
      return 0
    }

    const gutterWidthValue = <number>gutter(layoutId)({ theme })
    const value = push * gutterWidthValue

    if (withUnit) {
      return `${value}px`
    }

    return value
  },
)

/**
 * Get the mediaquery with min- and max-width values for a specific layout
 */
export const mediaQuery = withTheme<
  [string, boolean?, boolean?, boolean?, boolean?]
>(
  (
    theme,
    layoutId,
    noConflict = true,
    fromMin = true,
    toMax = true,
  ): string => {
    const mediaParts = []
    const minQuery = min(layoutId, true)({ theme })
    const maxQuery = max(layoutId, true, noConflict)({ theme })

    if (minQuery !== undefined && fromMin)
      mediaParts.push(`(min-width:${minQuery})`)
    if (maxQuery !== undefined && toMax)
      mediaParts.push(`(max-width:${maxQuery})`)

    if (mediaParts.length === 0) {
      if (!toMax && !minQuery) {
        throw new Error(`Layout '${layoutId}' has no 'min' value`)
      } else {
        throw new Error(`Layout '${layoutId}' has no 'max' value`)
      }
    }

    return mediaParts.join(' and ')
  },
)

/**
 * Get the mediaquery with only its min-width value for a specific layout
 */
export const minMediaQuery = withTheme<[string]>((theme, layoutId): string =>
  mediaQuery(layoutId, false, true, false)({ theme }),
)

/**
 * Get the mediaquery with only its max-width value for a specific layout
 */
export const maxMediaQuery = withTheme<[string]>((theme, layoutId): string =>
  mediaQuery(layoutId, false, false, true)({ theme }),
)

/**
 * Get an object that has layout ID's as its keys and the amount of columns per layout as its values
 */
export const defaultParentSpan = (
  theme: Theme.ThemeInterface,
): Theme.TypeSpan => {
  const layouts = getValueFromTheme('layouts')({ theme })
  const defaults = <Theme.TypeSpan>{}

  Object.keys(layouts).forEach((layoutId) => {
    defaults[layoutId] = columns(layoutId)({ theme })
  })

  return defaults
}

/**
 * Get the amount of columns to span from a passed property
 */
export const colCount = (span: Theme.TypeSpan, layoutId: string): number => {
  if (typeof span === 'number') {
    return span
  }

  return span[layoutId]
}

/**
 * Get the width of a column, or a set of columns, as a calc() rule
 */
export const colWidthCalc = withTheme<
  [
    {
      layoutId: string
      span?: Theme.TypeSpan
      parentSpan?: Theme.TypeSpan
      calculateAsPush?: boolean
    },
  ]
>(
  (
    theme,
    { layoutId, span = 1, parentSpan, calculateAsPush = false },
  ): string => {
    // get defaults if not set
    const spanContext = parentSpan || defaultParentSpan(theme)

    // get numeric values for columns
    const spanColsCount = colCount(span, layoutId)
    const parentCols = colCount(spanContext, layoutId)

    // cap the width to the parent
    const spanCols = spanColsCount > parentCols ? parentCols : spanColsCount

    // get unit values for gutters
    const gutterWidthInContext = spanGutterWidth(
      layoutId,
      parentCols,
      true,
    )({
      theme,
    })
    const gutterWidthInSpan = spanGutterWidth(
      layoutId,
      spanCols,
      true,
    )({
      theme,
    })

    // when pushing a column, an extra gutter needs to be added
    const pushGutterValue = calculateAsPush
      ? <string>gutter(layoutId, true)({ theme })
      : '0px'

    const columnWidth = `(100% - ${gutterWidthInContext}) / ${parentCols}`
    return `calc(((${columnWidth}) * ${spanCols}) + ${gutterWidthInSpan} + ${pushGutterValue})`
  },
)

/**
 * Get the width of a column, or a set of columns, as a calc() rule
 */
export const spanWidth = withTheme<
  [
    {
      layoutId: string
      parentSpan?: Theme.TypeSpan
      span: Theme.TypeSpan
    },
  ]
>((theme, { layoutId, span, parentSpan }): string => {
  const spanCols = colCount(span, layoutId)

  if (spanCols > 0 && spanCols >= columns(layoutId)({ theme })) {
    return '100%'
  }

  return colWidthCalc({ layoutId, span: spanCols, parentSpan })({ theme })
})

/**
 * Get the width that a column, or a set of columns, needs to be pushed to the right in the grid, as a calc() rule
 */
export const pushWidth = withTheme<
  [
    {
      layoutId: string
      parentSpan?: Theme.TypeSpan
      push: Theme.TypeSpan
    },
  ]
>((theme, { layoutId, push, parentSpan }): string => {
  // don't allow pushing over the edge
  const maxMinusOne = columns(layoutId)({ theme }) - 1
  const pushCols = colCount(push, layoutId)
  const pushValue = pushCols > maxMinusOne ? maxMinusOne : pushCols

  return colWidthCalc({
    layoutId,
    span: pushValue,
    parentSpan,
    calculateAsPush: true,
  })({
    theme,
  })
})

/**
 * Get the sum of all gutters and margins for the entire grid of a specific layout
 */
export const spacerWidth = withTheme<[string, boolean]>(
  (theme, layoutId, withUnit = false) => {
    const gridGutterWidthValue = <number>gridGutterWidth(layoutId)({ theme })
    const marginValue = <number>margin(layoutId)({ theme })

    if (gridGutterWidthValue >= 0 && marginValue >= 0) {
      const value = gridGutterWidthValue + 2 * marginValue

      if (withUnit) {
        return `${value}px`
      }

      return value
    }

    return undefined
  },
)
