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
    breakpoints: {
      tabletS: {
        defaultColor: colors.tint.level7,
        fontSize: '30px',
        fontWeight: 700,
        letterSpacing: 'inherit',
        lineHeight: '38px',
      },
    },
  },
  h2: {
    defaultColor: colors.tint.level7,
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '28px',
    breakpoints: {
      tabletS: {
        defaultColor: colors.tint.level7,
        fontSize: '24px',
        fontWeight: 700,
        letterSpacing: 'inherit',
        lineHeight: '30px',
      },
    },
  },
  h3: {
    defaultColor: colors.tint.level7,
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '-0.01562em',
    lineHeight: '28px',
  },
  h4: {
    defaultColor: colors.tint.level7,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: '25px',
  },
  h5: {
    defaultColor: colors.tint.level7,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h6: {
    defaultColor: colors.tint.level7,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  a: {
    defaultColor: colors.tint.level7,
    fontSize: '1rem',
    fontWeight: 'inherit',
    letterSpacing: '-0.01562em',
    lineHeight: 1.25,
  },
  p: {
    defaultColor: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: '22px',
  },
  em: {
    defaultColor: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: 1.25,
  },
  small: {
    defaultColor: colors.tint.level7,
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: '18px',
  },
  span: {
    defaultColor: colors.tint.level7,
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: '18px',
  },
}

export default typography
