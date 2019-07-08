import { sizes } from './breakpoints'

export const maxGridWidth = sizes.laptopL

const layouts = {
  large: {
    columns: 12,
    margin: 50,
    gutter: 32,
    min: sizes.laptopL,
  },
  big: {
    columns: 12,
    margin: 24,
    gutter: 24,
    max: sizes.laptopL,
    min: sizes.laptop,
  },
  medium: {
    columns: 8,
    margin: 24,
    gutter: 24,
    max: sizes.laptop,
    min: sizes.tabletM,
  },
  small: {
    columns: 4,
    margin: 20,
    gutter: 12,
    max: sizes.tabletM,
  },
}

export default layouts
