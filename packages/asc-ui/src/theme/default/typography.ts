import { calculateFluidStyle } from '../../utils'
import type { Theme } from '../../types'
import colors from './colors'

const defaultFontFamily = 'Avenir Next, Arial, sans-serif'

const typography: Theme.TypographyInterface = {
  fontFamily: defaultFontFamily,
  h1: {
    color: colors.tint.level7,
    fontSize: calculateFluidStyle(32, 80),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(40, 88),
  },
  h2: {
    color: colors.tint.level7,
    fontSize: calculateFluidStyle(28, 56),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(34, 62),
  },
  h3: {
    color: colors.tint.level7,
    fontSize: calculateFluidStyle(24, 40),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(31, 44),
  },
  h4: {
    color: colors.tint.level7,
    fontSize: calculateFluidStyle(22, 32),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(31, 38),
  },
  h5: {
    color: colors.tint.level7,
    fontSize: calculateFluidStyle(18, 24),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(25, 31),
  },
  h6: {
    color: colors.tint.level7,
    fontSize: calculateFluidStyle(16, 18),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(22, 23),
  },
  a: {
    color: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: '22px',
    marginBottom: '0',
    breakpoints: {
      laptop: {
        fontSize: '18px',
        lineHeight: '25px',
      },
    },
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
      laptop: {
        fontSize: '18px',
        lineHeight: '25px',
      },
    },
  },
  li: {
    color: colors.tint.level7,
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '22px',
    marginBottom: '8',
    breakpoints: {
      laptop: {
        fontSize: '18px',
        lineHeight: '25px',
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
