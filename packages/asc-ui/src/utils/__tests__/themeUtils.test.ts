// @ts-ignore
import { ascDefaultTheme } from '@datapunt/asc-core'
import {
  themeColor,
  focusStyleOutline,
  breakpoint,
  svgFill,
  getTypographyFromTheme,
  mapToBreakpoints,
  getTypographyValueFromProperty,
  themeSpacing,
} from '../themeUtils'

const { colors, typography } = ascDefaultTheme

describe('getColorFromTheme', () => {
  const theme = {
    ...ascDefaultTheme,
    colors: {
      ...colors,
      primary: {
        main: '#fff',
        dark: '#000',
      },
    },
  }

  it('should return the requested color from theme', () => {
    expect(themeColor('primary', 'main')({ theme })).toBe('#fff')
    expect(themeColor('primary', 'dark')({ theme })).toBe('#000')
    expect(themeColor('primary')({ theme })).toBe('#fff')
  })

  it('should return the default color when the colorType is not provided', () => {
    expect(themeColor()({ theme })).toBe('#ffffff')
  })
})

describe('getTypographyFromTheme', () => {
  it('should return the requested typography from theme', () => {
    const theme = {
      ...ascDefaultTheme,
      typography: {
        ...typography,
      },
    }

    expect(getTypographyFromTheme()({ as: 'p', theme })).toMatchSnapshot()
  })
})

describe('getTypographyValueFromProperty', () => {
  const theme = {
    ...ascDefaultTheme,
    typography: {
      ...typography,
    },
  }
  it('should the value without a breakpoint', () => {
    expect(
      getTypographyValueFromProperty('h1', 'lineHeight')({ theme }),
    ).toEqual('30px')
  })

  it('should the value with a breakpoint', () => {
    expect(
      getTypographyValueFromProperty('h1', 'lineHeight', 'tabletS')({ theme }),
    ).toEqual('38px')
  })

  it('should return an empty string if no results could be found', () => {
    expect(
      getTypographyValueFromProperty('h1', 'lineHeight', 'laptop')({ theme }),
    ).toEqual('')
  })
})

describe('focusStyleOutline', () => {
  const theme = {
    ...ascDefaultTheme,
    colors: {
      ...colors,
      support: {
        ...colors.support,
        focus: '#abcde',
      },
    },
  }

  it('should return the focusstyle from theme', () => {
    const result = focusStyleOutline()({ theme })
    expect(result).toContain('#abcde')
  })
})

describe('breakpoint', () => {
  const theme = {
    ...ascDefaultTheme,
  }

  it('should return the right breakpoint', () => {
    expect(breakpoint('max-width', 'desktopL')({ theme })).toEqual(
      '(max-width: 2559px)',
    )
    expect(breakpoint('min-width', 'mobileL')({ theme })).toEqual(
      '(min-width: 414px)',
    )
  })
})

describe('svgFill', () => {
  const theme = {
    ...ascDefaultTheme,
  }

  it("should return een empty string when the color doesn't exist", () => {
    expect(svgFill()({ theme })).toBe('')
  })

  it('should return the right fill color for the svg', () => {
    expect(svgFill('tint', 'level5')({ theme })[1]).toContain('#767676')
  })
})

// Todo: use serializer: https://github.com/styled-components/jest-styled-components
describe('mapToBreakpoints', () => {
  const theme = {
    ...ascDefaultTheme,
  }

  it('should return a style with 3 breakpoints and corresponding values', () => {
    expect(
      mapToBreakpoints(['100px', '70px', '50px'], 'width', theme),
    ).toMatchSnapshot()
    expect(
      mapToBreakpoints(['500px', '600px', '200px'], 'flex-basis', theme),
    ).toMatchSnapshot()
  })

  it('should return only return the possible results if the limit has reached', () => {
    const result = mapToBreakpoints(
      [
        '100px',
        '70px',
        '50px',
        '100px',
        '70px',
        '50px',
        '100px',
        '70px',
        '50px',
        '50px',
        '50px',
      ], // 2 too many...
      'width',
      theme,
    )
    expect(result).toMatchSnapshot()
  })
})

describe('themeSpacing', () => {
  const theme = {
    ...ascDefaultTheme,
  }
  it('should return the result of n * theme spacing', () => {
    expect(themeSpacing(0)({ theme })).toBe('0')
    expect(themeSpacing(1)({ theme })).toBe('4px')
    expect(themeSpacing(2)({ theme })).toBe('8px')
    expect(themeSpacing(3)({ theme })).toBe('12px')
  })

  it('should accept up to 4 parameters and return a spaced separated string with the results', () => {
    expect(themeSpacing(1, 3)({ theme })).toBe('4px 12px')
    expect(themeSpacing(1, 2, 3)({ theme })).toBe('4px 8px 12px')
    expect(themeSpacing(1, 2, 3, 4)({ theme })).toBe('4px 8px 12px 16px')
  })
})
