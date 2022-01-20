import merge from 'deepmerge'
import { ascDefaultTheme } from '../../theme'
import * as grid from '../grid'

const theme = {
  ...ascDefaultTheme,
  layouts: {
    huge: {
      columns: 100,
      gutter: 20,
      margin: 20,
      min: 2000,
    },
    somewhereInTheMiddle: {
      columns: 40,
      gutter: 13,
      margin: 17,
      max: 2000,
      min: 750,
    },
    theSmallest: {
      columns: 16,
      gutter: 0,
      max: 750,
    },
    theImpossible: {
      columns: 7,
      gutter: 33,
    },
  },
}

describe('utils/grid', () => {
  describe('maxWidth', () => {
    it('should return a number', () => {
      expect(typeof grid.maxWidth()({ theme })).toEqual('number')
    })

    it('should return a string', () => {
      expect(typeof grid.maxWidth(true)({ theme })).toEqual('string')
    })

    it('should throw', () => {
      expect(() => {
        const noMaxGridWidthValue = { ...theme }
        // eslint-disable-next-line
        // @ts-ignore
        delete noMaxGridWidthValue.maxGridWidth

        grid.maxWidth()({ theme: noMaxGridWidthValue })
      }).toThrow()
    })
  })

  describe('columns', () => {
    it('should return a number from a layout object', () => {
      Object.keys(theme.layouts).forEach((layoutId: any) => {
        expect(grid.columns(layoutId)({ theme })).toEqual(
          theme.layouts[layoutId].columns,
        )
      })
    })

    it('should throw', () => {
      expect(() => {
        const noColumns = merge({}, { ...theme })
        // eslint-disable-next-line
        // @ts-ignore
        delete noColumns.layouts.huge.columns

        grid.columns('huge')({ theme: noColumns })
      }).toThrow()

      expect(() => {
        grid.columns('layoutDoesNotExist')({ theme })
      }).toThrow()
    })
  })

  describe('gutter', () => {
    it('should return a number', () => {
      expect(typeof grid.gutter('huge')({ theme })).toEqual('number')
    })

    it('should return a string', () => {
      expect(typeof grid.gutter('huge', true)({ theme })).toEqual('string')
    })

    it('should return 0', () => {
      const noGutter = merge({}, theme)
      // eslint-disable-next-line
      // @ts-ignore
      delete noGutter.layouts.huge.gutter

      expect(grid.gutter('huge')({ theme: noGutter })).toEqual(0)
    })
  })

  describe('margin', () => {
    it('should return a number', () => {
      expect(typeof grid.margin('huge')({ theme })).toEqual('number')
    })

    it('should always return a value', () => {
      expect(grid.margin('theSmallest')({ theme })).toEqual(0)
    })

    it('should return a string', () => {
      expect(typeof grid.margin('huge', true)({ theme })).toEqual('string')
    })
  })

  describe('min', () => {
    it('should return a number', () => {
      expect(typeof grid.min('huge')({ theme })).toEqual('number')
    })

    it('should return a string', () => {
      expect(typeof grid.min('huge', true)({ theme })).toEqual('string')
    })

    it('should return undefined', () => {
      expect(typeof grid.min('theSmallest')({ theme })).toEqual('undefined')
    })
  })

  describe('max', () => {
    it('should return a number', () => {
      expect(typeof grid.max('theSmallest')({ theme })).toEqual('number')
    })

    it('should return a string', () => {
      expect(typeof grid.max('theSmallest', true)({ theme })).toEqual('string')
    })

    it('should return undefined', () => {
      expect(typeof grid.max('huge')({ theme })).toEqual('undefined')
    })
  })

  describe('gridGutterWidth', () => {
    it('should return a number', () => {
      expect(typeof grid.gridGutterWidth('theSmallest')({ theme })).toEqual(
        'number',
      )
    })

    it('should return a string', () => {
      expect(
        typeof grid.gridGutterWidth('theSmallest', true)({ theme }),
      ).toEqual('string')
    })
  })

  describe('spanGutterWidth', () => {
    it('should return a number', () => {
      expect(typeof grid.spanGutterWidth('theSmallest', 2)({ theme })).toEqual(
        'number',
      )
    })

    it('should return a string', () => {
      expect(
        typeof grid.spanGutterWidth('theSmallest', 2, true)({ theme }),
      ).toEqual('string')
    })
  })

  describe('pushGutterWidth', () => {
    it('should return a number', () => {
      expect(typeof grid.pushGutterWidth('theSmallest', 2)({ theme })).toEqual(
        'number',
      )
    })

    it('should return a string', () => {
      expect(
        typeof grid.pushGutterWidth('theSmallest', 2, true)({ theme }),
      ).toEqual('string')
    })
  })

  describe('mediaQuery', () => {
    it('should throw', () => {
      expect(() => {
        grid.mediaQuery('theImpossible')({ theme })
      }).toThrow()
    })

    it('should return a min-width query', () => {
      const query = grid.mediaQuery(
        'somewhereInTheMiddle',
        true,
        true,
        false,
      )({
        theme,
      })
      expect(query).not.toEqual(expect.stringMatching(/\(max-width/))
      expect(query).toEqual(expect.stringMatching(/\(min-width/))
    })

    it('should return a max-width query', () => {
      const query = grid.mediaQuery(
        'somewhereInTheMiddle',
        true,
        false,
      )({
        theme,
      })
      expect(query).not.toEqual(expect.stringMatching(/\(min-width/))
      expect(query).toEqual(expect.stringMatching(/\(max-width/))
    })

    it('should return a min-width, max-width query', () => {
      expect(grid.mediaQuery('somewhereInTheMiddle')({ theme })).toEqual(
        expect.stringMatching(/\(min-width.*\(max-width/),
      )
    })

    it('should return no-conflict query', () => {
      const query = grid.mediaQuery('somewhereInTheMiddle', false)({ theme })
      const queryNoConflict = grid.mediaQuery('somewhereInTheMiddle')({ theme })

      expect(query).toEqual(
        expect.stringContaining(
          `(max-width:${theme.layouts.somewhereInTheMiddle.max}px)`,
        ),
      )
      expect(queryNoConflict).toEqual(
        expect.stringContaining(
          `(max-width:${theme.layouts.somewhereInTheMiddle.max - 1}px)`,
        ),
      )
    })
  })

  describe('minMediaQuery', () => {
    it('should return a string', () => {
      expect(grid.minMediaQuery('huge')({ theme })).toEqual(
        expect.stringContaining(`min-width:${theme.layouts.huge.min}`),
      )
    })

    it('should throw', () => {
      expect(() => {
        grid.minMediaQuery('theSmallest')({ theme })
      }).toThrow(/has no 'min' value/)
    })
  })

  describe('maxMediaQuery', () => {
    it('should return a string', () => {
      expect(grid.maxMediaQuery('somewhereInTheMiddle')({ theme })).toEqual(
        expect.stringContaining(
          `max-width:${theme.layouts.somewhereInTheMiddle.max}`,
        ),
      )
    })

    it('should throw', () => {
      expect(() => {
        grid.maxMediaQuery('huge')({ theme })
      }).toThrow(/has no 'max' value/)
    })
  })

  describe('defaultParentSpan', () => {
    it('should return an object', () => {
      const defaultSpans = {
        huge: 100,
        somewhereInTheMiddle: 40,
        theSmallest: 16,
        theImpossible: 7,
      }
      expect(grid.defaultParentSpan(theme)).toEqual(defaultSpans)
    })
  })

  describe('colCount', () => {
    it('should return a number', () => {
      expect(grid.colCount(4, 'huge')).toEqual(4)

      const spanObj = { huge: 4, theImpossible: 2 }
      expect(grid.colCount(spanObj, 'huge')).toEqual(4)
    })
  })

  describe('colWidthCalc', () => {
    it('should return a calc() rule', () => {
      const span = 10
      const calcRe = new RegExp(`calc.* \\* ${span}`)
      const colCalcStr = grid.colWidthCalc({ layoutId: 'huge', span })({
        theme,
      })
      const colCalcWithPushStr = grid.colWidthCalc({
        layoutId: 'huge',
        span,
        calculateAsPush: true,
      })({ theme })

      expect(colCalcStr).toEqual(expect.stringMatching(calcRe))
      expect(colCalcWithPushStr).toEqual(expect.stringMatching(calcRe))

      expect(colCalcStr).not.toEqual(colCalcWithPushStr)
    })
  })

  describe('spanWidth', () => {
    it('should return 100%', () => {
      const overflowSpan = theme.layouts.somewhereInTheMiddle.columns + 1
      expect(
        grid.spanWidth({
          layoutId: 'somewhereInTheMiddle',
          span: overflowSpan,
        })({ theme }),
      ).toEqual('100%')
    })

    it('should return a calc() rule', () => {
      const span = {
        huge: 10,
        somewhereInTheMiddle: 4,
        theSmallest: 6,
        theImpossible: 2,
      }
      const parentSpan = {
        huge: 60,
        somewhereInTheMiddle: 20,
        theSmallest: 10,
        theImpossible: 4,
      }
      const calcRe = new RegExp(`calc.* \\* ${span.somewhereInTheMiddle}`)
      const spanWidthStr = grid.spanWidth({
        layoutId: 'somewhereInTheMiddle',
        span,
      })({ theme })
      const spanWithParentSpanWidthstr = grid.spanWidth({
        layoutId: 'somewhereInTheMiddle',
        span,
        parentSpan,
      })({ theme })

      expect(spanWidthStr).toEqual(expect.stringMatching(calcRe))
      expect(spanWithParentSpanWidthstr).toEqual(expect.stringMatching(calcRe))

      expect(spanWidthStr).not.toEqual(spanWithParentSpanWidthstr)

      const widthRe =
        /^calc\(\(\(\(100% - (\d+)px\) \/ (\d+)\) \* \d+\) \+ \d+px \+ \d+px\)$/
      const matches: string[] = spanWidthStr.match(widthRe)
      const parentSpanMatches: string[] =
        spanWithParentSpanWidthstr.match(widthRe)

      expect(parseInt(matches[1], 10)).toBeGreaterThan(
        parseInt(parentSpanMatches[1], 10),
      )
      expect(parseInt(matches[2], 10)).toEqual(
        theme.layouts.somewhereInTheMiddle.columns,
      )
      expect(parseInt(parentSpanMatches[2], 10)).toEqual(
        parentSpan.somewhereInTheMiddle,
      )
    })
  })
})
