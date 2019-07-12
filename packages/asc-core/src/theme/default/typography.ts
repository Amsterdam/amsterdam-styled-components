import { rem } from 'polished'
import { Theme } from '../index'
import colors from './colors'

const defaultFontFamily = 'Avenir Next, Arial, sans-serif'

const typography: Theme.TypographyInterface = {
  fontFamily: defaultFontFamily,
  fontSize: '16px',
  h1: {
    color: colors.tint.level7,
    fontSize: '30px',
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '38px',
  },
  h2: {
    color: colors.secondary.main,
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h3: {
    color: colors.secondary.main,
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h4: {
    color: colors.tint.level7,
    fontSize: rem(18),
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h5: {
    color: colors.tint.level7,
    fontSize: rem(18),
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h6: {
    color: colors.tint.level7,
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  a: {
    color: colors.tint.level7,
    fontSize: '1rem',
    fontWeight: 'inherit',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  p: {
    color: colors.tint.level7,
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: 1.25,
  },
  em: {
    color: colors.tint.level5,
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '-0.01562em',
    lineHeight: 1.25,
  },
}

export default typography
