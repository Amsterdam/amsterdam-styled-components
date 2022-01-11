import type { Theme } from '../../types'

const defaultFontFamily =
  'Avenir Next W01,Helvetica Neue,Helvetica,Arial,sans-serif'

const typography: Theme.TypographyInterface = {
  fontFamily: defaultFontFamily,
  h1: {
    default: {
      minFontSize: 32,
      maxFontSize: 80,
      minLineHeight: 40,
      maxLineHeight: 88,
    },
    small: {
      minFontSize: 30,
      maxFontSize: 60,
      minLineHeight: 34,
      maxLineHeight: 64,
    },
  },
  h2: {
    default: {
      minFontSize: 28,
      maxFontSize: 56,
      minLineHeight: 32,
      maxLineHeight: 64,
    },
  },
  h3: {
    default: {
      minFontSize: 24,
      maxFontSize: 40,
      minLineHeight: 32,
      maxLineHeight: 48,
    },
  },
  h4: {
    default: {
      minFontSize: 22,
      maxFontSize: 32,
      minLineHeight: 32,
      maxLineHeight: 40,
    },
  },
  h5: {
    default: {
      minFontSize: 18,
      maxFontSize: 24,
      minLineHeight: 26,
      maxLineHeight: 32,
    },
  },
  h6: {
    default: {
      minFontSize: 16,
      maxFontSize: 18,
      minLineHeight: 22,
      maxLineHeight: 24,
    },
  },
  p: {
    default: {
      minFontSize: 18,
      maxFontSize: 24,
      minLineHeight: 28,
      maxLineHeight: 40,
    },
    intro: {
      minFontSize: 18,
      maxFontSize: 30,
      minLineHeight: 28,
      maxLineHeight: 40,
    },
    small: {
      minFontSize: 16,
      maxFontSize: 18,
      minLineHeight: 24,
      maxLineHeight: 26,
    },
  },
  a: {
    default: {
      minFontSize: 18,
      maxFontSize: 24,
      minLineHeight: 26,
      maxLineHeight: 32,
    },
  },
  button: {
    default: {
      minFontSize: 18,
      maxFontSize: 24,
      minLineHeight: 28,
      maxLineHeight: 40,
    },
    small: {
      minFontSize: 16,
      maxFontSize: 18,
      minLineHeight: 22,
      maxLineHeight: 24,
    },
  },
  blockquote: {
    default: {
      minFontSize: 24,
      maxFontSize: 40,
      minLineHeight: 32,
      maxLineHeight: 48,
    },
  },
  ul: {
    default: {
      minFontSize: 18,
      maxFontSize: 24,
      minLineHeight: 28,
      maxLineHeight: 40,
    },
    small: {
      minFontSize: 16,
      maxFontSize: 18,
      minLineHeight: 24,
      maxLineHeight: 26,
    },
  },
  ol: {
    default: {
      minFontSize: 18,
      maxFontSize: 24,
      minLineHeight: 28,
      maxLineHeight: 40,
    },
    small: {
      minFontSize: 16,
      maxFontSize: 18,
      minLineHeight: 24,
      maxLineHeight: 26,
    },
  },
  dl: {
    default: {
      minFontSize: 16,
      maxFontSize: 18,
      minLineHeight: 24,
      maxLineHeight: 26,
    },
  },
  table: {
    default: {
      minFontSize: 16,
      maxFontSize: 18,
      minLineHeight: 24,
      maxLineHeight: 26,
    },
  },
}

export default typography
