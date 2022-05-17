import type { Theme } from '../../types'
import colors from './colors'
import { calculateFluidStyle } from '../../utils/themeUtils'

const defaultFontFamily = 'Avenir Next, Arial, sans-serif'

/**
 *  The font definitions differ from the ones in the design system.
 *  In this theme are the breakpoints for the typographty set to `laptop` (1024px)
 *  while in design system are set to `tabletS` (540px)
 */
const typography: Theme.TypographyInterface = {
  fontFamily: defaultFontFamily,
  h1: {
    color: colors.tint.level7,
    fontSize: calculateFluidStyle(32, 80),
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '30px',
    marginBottom: '0',
    breakpoints: {
      laptop: {
        letterSpacing: 'inherit',
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
      laptop: {
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
    fontWeight: 700,
    letterSpacing: 'inherit',
    lineHeight: '25px',
    marginBottom: '8px',
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
