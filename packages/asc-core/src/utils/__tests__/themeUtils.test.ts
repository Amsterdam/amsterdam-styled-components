import {
  color,
  focusStyle,
  breakpoint,
  svgFill,
  getTypographyFromTheme,
} from '../themeUtils'
import breakpoints from '../../theme/default/breakpoints'
import colors from '../../theme/default/colors'
import globalStyle from '../../theme/default/globalStyle'
import typography from '../../theme/default/typography'

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

describe('focusStyle', () => {
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
    const result = focusStyle()({ theme })
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

  it("should return undefined when the breakpoint doesn't exist", () => {
    expect(breakpoint('max-width', 'not-valid')({ theme })).toBeUndefined()
  })

  it('should return the right breakpoint', () => {
    expect(breakpoint('max-width', 'desktop')({ theme })).toEqual(
      '(max-width: 2560px)',
    )
    expect(breakpoint('min-width', 'mobileL')({ theme })).toEqual(
      '(min-width: 425px)',
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
    expect(svgFill('tint', 'level5')({ theme })).toContain('fill: #000')
  })
})
