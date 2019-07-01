import { Theme } from '../index'

const withTypeBreakpoint = (size: number) => (type: Theme.TypeBreakpoint) =>
  `(${type}: ${size + (type === 'min-width' ? 0.02 : 0)}px)`

export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1200,
  laptopL: 1440,
  desktop: 2560,
}

const breakpoints: Theme.BreakpointsInterface = {
  mobileS: withTypeBreakpoint(sizes.mobileS),
  mobileM: withTypeBreakpoint(sizes.mobileM),
  mobileL: withTypeBreakpoint(sizes.mobileL),
  tablet: withTypeBreakpoint(sizes.tablet),
  laptop: withTypeBreakpoint(sizes.laptop),
  laptopM: withTypeBreakpoint(sizes.laptopM),
  laptopL: withTypeBreakpoint(sizes.laptopL),
  desktop: withTypeBreakpoint(sizes.desktop),
  desktopL: withTypeBreakpoint(sizes.desktop),
}

export default breakpoints
