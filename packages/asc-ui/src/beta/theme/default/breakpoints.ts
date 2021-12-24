import type { Theme } from '../../types'

const withTypeBreakpoint = (size: number) => (type: Theme.TypeBreakpoint) =>
  `(${type}: ${size + (type === 'max-width' ? -1 : 0)}px)`

export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 414,
  tabletS: 540,
  tabletM: 768,
  laptop: 1024,
  laptopM: 1200,
  laptopL: 1430,
  desktop: 1920,
  desktopL: 2560,
}

const breakpoints: Theme.BreakpointsInterface = {
  mobileS: withTypeBreakpoint(sizes.mobileS),
  mobileM: withTypeBreakpoint(sizes.mobileM),
  mobileL: withTypeBreakpoint(sizes.mobileL),
  tabletS: withTypeBreakpoint(sizes.tabletS),
  tabletM: withTypeBreakpoint(sizes.tabletM),
  laptop: withTypeBreakpoint(sizes.laptop),
  laptopM: withTypeBreakpoint(sizes.laptopM),
  laptopL: withTypeBreakpoint(sizes.laptopL),
  desktop: withTypeBreakpoint(sizes.desktop),
  desktopL: withTypeBreakpoint(sizes.desktopL),
}

export default breakpoints
