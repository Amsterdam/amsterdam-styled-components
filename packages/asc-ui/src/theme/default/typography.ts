import { calculateFluidStyle } from '../../utils'
import type { Theme } from '../../types'

const defaultFontFamily = 'Avenir Next, Arial, sans-serif'

const typography: Theme.TypographyInterface = {
  fontFamily: defaultFontFamily,
  h1: {
    fontSize: calculateFluidStyle(32, 80),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(40, 88),
    small: {
      fontSize: calculateFluidStyle(30, 60),
      lineHeight: calculateFluidStyle(33, 63),
    },
  },
  h2: {
    fontSize: calculateFluidStyle(28, 56),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(34, 62),
  },
  h3: {
    fontSize: calculateFluidStyle(24, 40),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(31, 44),
  },
  h4: {
    fontSize: calculateFluidStyle(22, 32),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(31, 38),
  },
  h5: {
    fontSize: calculateFluidStyle(18, 24),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(25, 31),
  },
  h6: {
    fontSize: calculateFluidStyle(16, 18),
    fontWeight: 800,
    lineHeight: calculateFluidStyle(22, 23),
  },
  a: {
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
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: 1.25,
    marginBottom: '0',
  },
  small: {
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '18px',
    marginBottom: '0',
  },
  span: {
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 'inherit',
    lineHeight: '18px',
    marginBottom: '0',
  },
}

export default typography
