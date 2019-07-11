import { sizes } from './breakpoints'

export const maxGridWidth = 2560

const layouts = {
  large: {
    columns: 18,
    margin: 60,
    gutter: 34,
    min: sizes.laptopL,
  },
  big: {
    columns: 12,
    margin: 40,
    gutter: 24,
    max: sizes.laptopL,
    min: sizes.laptop,
  },
  medium: {
    columns: 8,
    margin: 20,
    gutter: 20,
    max: sizes.laptop,
    min: sizes.tabletM,
  },
  small: {
    columns: 4,
    margin: 0,
    gutter: 12,
    max: sizes.tabletM,
  },
}

export default layouts
