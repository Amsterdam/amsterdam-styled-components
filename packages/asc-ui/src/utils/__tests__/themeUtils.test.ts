// @ts-ignore
import { ascDefaultTheme } from '@datapunt/asc-core'
import 'jest-styled-components'
import {
  color,
  focusStyleOutline,
  breakpoint,
  svgFill,
  getTypographyFromTheme,
  mapToBreakpoints,
} from '../themeUtils'

const { breakpoints, colors, globalStyle, typography } = ascDefaultTheme

describe('getColorFromTheme', () => {
  const theme = {
    breakpoints,
    globalStyle,
    colors: {
      ...colors,
      primary: {
        main: '#fff',
        dark: '#000',
      },
    },
    typography,
  }

  it('should return the requested color from theme', () => {
    expect(color('primary', 'main')({ theme })).toBe('#fff')
    expect(color('primary', 'dark')({ theme })).toBe('#000')
    expect(color('primary')({ theme })).toBe('#fff')
  })

  it('should returen the default color when the colorType is not provided', () => {
    expect(color()({ theme })).toBe('#ffffff')
  })
})

describe('getTypographyFromTheme', () => {
  it('should return the requested typography from theme', () => {
    const theme = {
      breakpoints,
      globalStyle,
      colors,
      typography: {
        ...typography,
        fontSize: '16px',
      },
    }

    expect(getTypographyFromTheme(theme, 'fontSize')).toBe('16px')
  })
})

describe('focusStyleOutline', () => {
  const theme = {
    breakpoints,
    globalStyle,
    colors: {
      ...colors,
      support: {
        ...colors.support,
        focus: '#abcde',
      },
    },
    typography,
  }

  it('should return the focusstyle from theme', () => {
    const result = focusStyleOutline()({ theme })
    expect(result).toContain('#abcde')
  })
})

describe('breakpoint', () => {
  const theme = {
    breakpoints,
    globalStyle,
    colors,
    typography,
  }

  it('should return the right breakpoint', () => {
    expect(breakpoint('max-width', 'desktopL')({ theme })).toEqual(
      '(max-width: 2560px)',
    )
    expect(breakpoint('min-width', 'mobileL')({ theme })).toEqual(
      '(min-width: 425.02px)',
    )
  })
})

describe('svgFill', () => {
  const theme = {
    breakpoints,
    globalStyle,
    colors,
    typography,
  }

  it("should return een empty string when the color doesn't exist", () => {
    expect(svgFill()({ theme })).toBe('')
  })

  it('should return the right fill color for the svg', () => {
    expect(svgFill('tint', 'level5')({ theme })).toContain('fill: #767676')
  })
})

// Todo: use serializer: https://github.com/styled-components/jest-styled-components
describe('mapToBreakpoints', () => {
  const theme = {
    breakpoints,
    globalStyle,
    colors,
    typography,
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
