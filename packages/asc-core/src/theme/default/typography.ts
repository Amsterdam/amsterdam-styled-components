import { rem } from 'polished'
import { Theme } from '../index'
import colors from './colors'
import { css } from '../../styled-components'

const defaultFontFamily = 'AvenirNextLTW01-Regular, verdana, sans-serif'

const typography: Theme.TypographyInterface = {
  fontFamily: defaultFontFamily,
  fontSize: '16px',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightHeavy: 900,
  h1: {
    fontFamily: 'inherit',
    color: colors.tint.level7,
    fontSize: '6rem',
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h2: {
    fontFamily: 'inherit',
    color: colors.tint.level7,
    fontSize: '6rem',
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h3: {
    fontFamily: 'inherit',
    color: colors.tint.level7,
    fontSize: '6rem',
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h4: {
    fontFamily: 'inherit',
    color: colors.tint.level7,
    fontSize: css`
      ${rem(18)}
    `,
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h5: {
    fontFamily: 'inherit',
    color: colors.tint.level7,
    fontSize: css`
      ${rem(18)}
    `,
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h6: {
    fontFamily: 'inherit',
    color: colors.tint.level7,
    fontSize: '6rem',
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  a: {
    fontFamily: 'inherit',
    color: colors.tint.level7,
    fontSize: '1rem',
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  p: {
    fontFamily: 'inherit',
    color: colors.tint.level7,
    fontSize: '1rem',
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1.25,
  },
}

export default typography
