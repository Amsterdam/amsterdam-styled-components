import { sizes } from './breakpoints'

export const maxGridWidth = sizes.laptopL
export const maxContainerWidth = sizes.desktop

const layouts = {
  xLarge: {
    columns: 12,
    margin: 44,
    gutter: 24,
    min: sizes.laptopM,
  },
  large: {
    columns: 12,
    margin: 32,
    gutter: 24,
    max: sizes.laptopM,
    min: sizes.laptop,
  },
  big: {
    columns: 6,
    margin: 24,
    gutter: 24,
    max: sizes.laptop,
    min: sizes.tabletM,
  },
  medium: {
    columns: 2,
    margin: 20,
    gutter: 20,
    max: sizes.tabletM,
    min: sizes.mobileL,
  },
  small: {
    columns: 1,
    margin: 20,
    max: sizes.mobileL,
  },
}

export default layouts
