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
    fontFamily: defaultFontFamily,
    color: colors.tint.level8,
    fontSize: '6rem',
    fontWeight: 'fontWeightMedium',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h2: {
    fontFamily: defaultFontFamily,
    color: colors.tint.level8,
    fontSize: '6rem',
    fontWeight: 'fontWeightMedium',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h3: {
    fontFamily: defaultFontFamily,
    color: colors.tint.level8,
    fontSize: '6rem',
    fontWeight: 'fontWeightMedium',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h4: {
    fontFamily: defaultFontFamily,
    color: colors.tint.level8,
    fontSize: css`
      ${rem(18)}
    `,
    fontWeight: 'fontWeightMedium',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h5: {
    fontFamily: defaultFontFamily,
    color: colors.tint.level8,
    fontSize: css`
      ${rem(18)}
    `,
    fontWeight: 'fontWeightMedium',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  h6: {
    fontFamily: defaultFontFamily,
    color: colors.tint.level8,
    fontSize: '6rem',
    fontWeight: 'fontWeightMedium',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  a: {
    fontFamily: defaultFontFamily,
    color: colors.tint.level8,
    fontSize: '6rem',
    fontWeight: 'fontWeightMedium',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
  p: {
    fontFamily: defaultFontFamily,
    color: colors.tint.level8,
    fontSize: '1rem',
    fontWeight: 'fontWeightMedium',
    letterSpacing: '-0.01562em',
    lineHeight: 1,
  },
}

export default typography
