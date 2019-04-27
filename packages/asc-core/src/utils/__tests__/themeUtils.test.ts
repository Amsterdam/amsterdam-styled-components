import {
  getColorFromTheme,
  getTypographyFromTheme,
  getFocusStyle,
  getBreakpointFromTheme,
  fillSvgFromTheme,
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
    expect(getColorFromTheme(theme, 'primary', 'main')).toBe('#fff')
    expect(getColorFromTheme(theme, 'primary', 'dark')).toBe('#000')
    expect(getColorFromTheme(theme, 'primary')).toBe('#fff')
  })

  it('should returen the default color when the colorType is not provided', () => {
    expect(getColorFromTheme(theme)).toBe('#ffffff')
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

describe('getFocusStyle', () => {
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
    const result = getFocusStyle(theme)
    expect(result).toContain('#abcde')
  })
})

describe('getBreakpontFromTheme', () => {
  const theme = {
    breakpoints,
    globalStyle,
    colors,
    typography,
  }

  it("should return undefined when the breakpoint doesn't exist", () => {
    expect(
      getBreakpointFromTheme(theme, 'max-width', 'not-valid'),
    ).toBeUndefined()
  })

  it('should return the right breakpoint', () => {
    expect(getBreakpointFromTheme(theme, 'max-width', 'desktop')).toEqual(
      '(max-width: 2560px)',
    )
    expect(getBreakpointFromTheme(theme, 'min-width', 'mobileL')).toEqual(
      '(min-width: 425.02px)',
    )
  })
})

describe('fillSvgFromTheme', () => {
  const theme = {
    breakpoints,
    globalStyle,
    colors,
    typography,
  }

  it("should return een empty string when the color doesn't exist", () => {
    expect(fillSvgFromTheme(theme)).toBe('')
  })

  it('should return the right fill color for the svg', () => {
    expect(fillSvgFromTheme(theme, 'tint', 'level5')).toContain('fill: #000')
  })
})
