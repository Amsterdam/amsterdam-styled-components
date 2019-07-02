import { Theme } from '../theme'
import fromTheme from './fromTheme'

/**
 * Get the value for the maximum width of the grid
 */
export const maxWidth = (withUnit = false) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): number | string | undefined => {
  const gridWidthValue = fromTheme('layouts.maxGridWidth')({ theme })

  if (gridWidthValue) {
    return gridWidthValue + (withUnit && 'px')
  }

  return undefined
}

/**
 * Get the amount of column for a specific layout
 */
export const columns = (layoutId: Theme.TypeLayout) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): number => fromTheme(`layouts.${layoutId}.columns`)({ theme })

/**
 * Get the gutter width for a specific layout
 */
export const gutter = <T>(layoutId: Theme.TypeLayout, withUnit = false) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): string | number => {
  const gutterValue = fromTheme(`layouts.${layoutId}.gutter`)({ theme })

  if (withUnit) {
    return `${gutterValue}px`
  }

  return gutterValue
}

/**
 * Get the margin width for a specific layout
 */
export const margin = (layoutId: Theme.TypeLayout, withUnit = false) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): string | number => {
  const marginValue = fromTheme(`layouts.${layoutId}.margin`)({ theme })

  if (withUnit) {
    return `${marginValue}px`
  }

  return marginValue
}

/**
 * Get the min-width breakpoint value for a specific layout
 */
export const min = (layoutId: Theme.TypeLayout, withUnit = false) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): string | number | undefined => {
  const minValue = fromTheme(`layouts.${layoutId}.min`)({ theme })

  if (minValue >= 0) {
    if (withUnit) {
      return `${minValue}px`
    }

    return minValue
  }

  return undefined
}

/**
 * Get the max-width breakpoint value for a specific layout
 */
export const max = (
  layoutId: Theme.TypeLayout,
  withUnit = false,
  noConflict = false,
) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): string | number | undefined => {
  let maxValue = fromTheme(`layouts.${layoutId}.max`)({ theme })
  maxValue += noConflict ? -1 : 0

  if (maxValue > 0) {
    if (withUnit) {
      return `${maxValue}px`
    }

    return maxValue
  }

  return undefined
}

/**
 * Get the width of all gutters in a set of columns
 */
const gutterWidth = ({
  layoutId,
  span,
  withUnit = false,
  calculateAsPush = false,
}: {
  layoutId: Theme.TypeLayout
  span: number
  withUnit: boolean
  calculateAsPush?: boolean
}) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): number | string | undefined => {
  const gutterWidthValue = <number>gutter(layoutId)({ theme })

  if (gutterWidthValue >= 0) {
    let value = (span - 1) * gutterWidthValue
    value += calculateAsPush ? gutterWidthValue : 0

    if (withUnit) {
      return `${value}px`
    }

    return value
  }

  return undefined
}

/**
 * Get the mediaquery with min- and max-width values for a specific layout
 */
export const mediaQuery = (
  layoutId: Theme.TypeLayout,
  noConflict = true,
  fromMin = true,
  toMax = true,
) => ({ theme }: { theme: Theme.ThemeInterface }): string => {
  const mediaParts = []
  const minQuery = min(layoutId, true)({ theme })
  const maxQuery = max(layoutId, true, noConflict)({ theme })

  if (minQuery !== undefined && fromMin)
    mediaParts.push(`(min-width:${minQuery})`)
  if (maxQuery !== undefined && toMax)
    mediaParts.push(`(max-width:${maxQuery})`)

  if (mediaParts.length === 0) {
    if (fromMin && !minQuery) {
      throw new Error(`Layout '${layoutId}' has no 'min' value`)
    }

    if (toMax && !maxQuery) {
      throw new Error(`Layout '${layoutId}' has no 'max' value`)
    }
  }

  return mediaParts.join(' and ')
}

/**
 * Get the mediaquery with only its min-width value for a specific layout
 */
export const minMediaQuery = (layoutId: Theme.TypeLayout) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): string => mediaQuery(layoutId, false, true, false)({ theme })

/**
 * Get the mediaquery with only its max-width value for a specific layout
 */
export const maxMediaQuery = (layoutId: Theme.TypeLayout) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): string => mediaQuery(layoutId, false, false, true)({ theme })

/**
 * Get an object that has layout ID's as its keys and the amount of columns per layout as its values
 */
export const defaultParentSpan = (
  theme: Theme.ThemeInterface,
): Theme.TypeSpan => {
  const layouts = fromTheme('layouts')({ theme })
  const defaults = <Theme.TypeSpan>{}

  Object.keys(layouts)
    .filter(id => !!layouts[id].columns)
    .forEach(id => {
      defaults[id] = layouts[id].columns
    })

  return defaults
}

/**
 * Get the amount of columns to span from a passed property
 */
export const colCount = (
  span: Theme.TypeSpan,
  layoutId: Theme.TypeLayout,
): number => {
  if (typeof span === 'number') {
    return span
  }

  return span[layoutId]
}

/**
 * Get the width of a column, or a set of columns, as a calc() rule
 */
export const colWidthCalc = ({
  layoutId,
  span = 1,
  parentSpan,
  calculateAsPush = false,
}: {
  layoutId: Theme.TypeLayout
  span?: Theme.TypeSpan
  parentSpan?: Theme.TypeSpan
  calculateAsPush?: boolean
}) => ({ theme }: { theme: Theme.ThemeInterface }): string => {
  // get defaults if not set
  const parentSpans = parentSpan || defaultParentSpan(theme)

  // get numeric values for columns
  const spanCols = colCount(span, layoutId)
  const parentCols = colCount(parentSpans, layoutId)

  // get unit values for gutters
  const spanGutters = gutterWidth({
    layoutId,
    span: spanCols,
    withUnit: true,
    calculateAsPush,
  })({ theme })

  const parentGutters = gutterWidth({
    layoutId,
    span: parentCols,
    withUnit: true,
  })({ theme })

  const columnWidth = `(100% - ${parentGutters}) / ${parentCols}`
  return `calc(((${columnWidth}) * ${spanCols}) + ${spanGutters})`
}

export const columnPlusGutterwith = (layoutId: Theme.TypeLayout) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): string => {
  const columnWidth = `((100% - ${gridGutterWidth(layoutId, true)({
    theme,
  })}) / ${columns(layoutId)({ theme })})`
  return `calc(${columnWidth} + ${gutter(layoutId, true)({ theme })})`
}

/**
 * Get the width that a column, or a set of columns, needs to be pushed to the right in the grid, as a calc() rule
 */
export const pushWidth = ({
  layoutId,
  push,
  parentSpan,
}: {
  layoutId: Theme.TypeLayout
  parentSpan?: Theme.TypeSpan
  push: Theme.TypeSpan
}) => ({ theme }: { theme: Theme.ThemeInterface }): string => {
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
}

/**
 * Get the width of a column, or a set of columns, as a calc() rule
 */
export const spanWidth = ({
  layoutId,
  span,
  parentSpan,
}: {
  layoutId: Theme.TypeLayout
  parentSpan?: Theme.TypeSpan
  span: Theme.TypeSpan
}) => ({ theme }: { theme: Theme.ThemeInterface }): string => {
  const spanCols = colCount(span, layoutId)

  if (spanCols > 0 && spanCols >= columns(layoutId)({ theme })) {
    return '100%'
  }

  return colWidthCalc({ layoutId, span: spanCols, parentSpan })({ theme })
}

/**
 * Get the sum of the gutters for the entire grid
 */
export const gridGutterWidth = (
  layoutId: Theme.TypeLayout,
  withUnit = false,
) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}): string | number | undefined => {
  const cols = columns(layoutId)({ theme })
  const gutterWidthValue = <number>gutter(layoutId)({ theme })

  if (cols > 0 && gutterWidthValue >= 0) {
    const value = (cols - 1) * gutterWidthValue

    if (withUnit) {
      return `${value}px`
    }

    return value
  }

  return undefined
}

/**
 * Get the sum of all gutters and margins for the entire grid of a specific layout
 */
export const spacerWidth = (layoutId: Theme.TypeLayout, withUnit = false) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => {
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
}
