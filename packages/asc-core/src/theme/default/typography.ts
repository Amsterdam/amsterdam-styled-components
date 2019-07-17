import { Theme } from '../index'
import { colors } from './index'

const defaultFontFamily = 'Avenir Next, Arial, sans-serif'

const typography: Theme.TypographyInterface = {
  fontFamily: defaultFontFamily,
  fontSize: '16px',
  h1: {
    defaultColor: colors.tint.level7,
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '30px',
    marginBottom: '0',
    breakpoints: {
      tabletS: {
        defaultColor: colors.tint.level7,
        fontSize: '30px',
        fontWeight: 700,
        letterSpacing: 'inherit',
        lineHeight: '38px',
        marginBottom: '0',
      },
    },
  },
  h2: {
    defaultColor: colors.tint.level7,
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '28px',
    marginBottom: '0',
    breakpoints: {
      tabletS: {
        defaultColor: colors.tint.level7,
        fontSize: '24px',
        fontWeight: 700,
        letterSpacing: 'inherit',
        lineHeight: '30px',
        marginBottom: '0',
      },
    },
  },
  h3: {
    defaultColor: colors.tint.level7,
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '28px',
    marginBottom: '0',
  },
  h4: {
    defaultColor: colors.tint.level7,
    fontSize: '18px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '25px',
    marginBottom: '8px',
  },
  h5: {
    defaultColor: colors.tint.level7,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: 1,
    marginBottom: '0',
  },
  h6: {
    defaultColor: colors.tint.level7,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: 1,
    marginBottom: '0',
  },
  a: {
    defaultColor: colors.tint.level7,
    fontSize: '1rem',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 1.25,
    marginBottom: '0',
  },
  p: {
    defaultColor: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '22px',
    marginBottom: '20px',
    breakpoints: {
      tabletS: {
        defaultColor: colors.tint.level7,
        fontSize: '16px',
        fontWeight: 400,
        letterSpacing: 'inherit',
        lineHeight: '22px',
        marginBottom: '24px',
      },
    },
  },
  em: {
    defaultColor: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: 1.25,
    marginBottom: '0',
  },
  small: {
    defaultColor: colors.tint.level7,
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '18px',
    marginBottom: '0',
  },
  span: {
    defaultColor: colors.tint.level7,
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '18px',
    marginBottom: '0',
  },
}

export default typography
