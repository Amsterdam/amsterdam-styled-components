import { Theme } from '../index'
import colors from './colors'

const defaultFontFamily = 'Avenir Next, Arial, sans-serif'

const typography: Theme.TypographyInterface = {
  fontFamily: defaultFontFamily,
  fontSize: '16px',
  h1: {
    color: colors.tint.level7,
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '30px',
    marginBottom: '0',
    breakpoints: {
      tabletS: {
        fontSize: '30px',
        lineHeight: '38px',
      },
    },
  },
  h2: {
    color: colors.tint.level7,
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '28px',
    marginBottom: '8px',
    breakpoints: {
      tabletS: {
        fontSize: '24px',
        lineHeight: '30px',
      },
    },
  },
  h3: {
    color: colors.tint.level7,
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '28px',
    marginBottom: '8px',
  },
  h4: {
    color: colors.tint.level7,
    fontSize: '18px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '25px',
    marginBottom: '8px',
  },
  h5: {
    color: colors.tint.level7,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: 1,
    marginBottom: '0',
  },
  h6: {
    color: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 500,
    letterSpacing: 'inherit',
    lineHeight: '20px',
    marginBottom: '0',
  },
  a: {
    color: colors.tint.level7,
    fontSize: '1rem',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 1.25,
    marginBottom: '0',
  },
  p: {
    color: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '22px',
    marginBottom: '20px',
    breakpoints: {
      tabletS: {
        marginBottom: '24px',
      },
    },
  },
  em: {
    color: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: 1.25,
    marginBottom: '0',
  },
  small: {
    color: colors.tint.level7,
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '18px',
    marginBottom: '0',
  },
  span: {
    color: colors.tint.level7,
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '18px',
    marginBottom: '0',
  },
}

export default typography
