import { getColorFromTheme, getTypographyFromTheme } from '../themeUtils'
import colors from '../../theme/default/colors'
import globalStyle from '../../theme/default/globalStyle'
import typography from '../../theme/default/typography'

describe('getColorFromTheme', () => {
  it('should return the requested color from theme', () => {
    const theme = {
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

    expect(getColorFromTheme(theme, 'primary', 'main')).toBe('#fff')
    expect(getColorFromTheme(theme, 'primary', 'dark')).toBe('#000')
    expect(getColorFromTheme(theme, 'primary')).toBe('#fff')
  })
})

describe('getTypographyFromTheme', () => {
  it('should return the requested typography from theme', () => {
    const theme = {
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
