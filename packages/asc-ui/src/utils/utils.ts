export function log(message: string) {
  if (!(process && process.env && process.env.NODE_ENV === 'production')) {
    // eslint-disable-next-line no-console
    console.error(`[icons-react]: ${message}.`)
  }
}

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key]
    switch (key) {
      case 'class':
        acc.className = val
        delete acc.class
        break
      default:
        acc[key] = val
    }
    return acc
  }, {})
}

export interface Attrs {
  [key: string]: string
}
