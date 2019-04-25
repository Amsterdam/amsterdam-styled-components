import { Theme } from '../index'

const withTypeBreakpoint = (size: string) => (type: Theme.TypeBreakpoint) =>
  `(${type}: ${size})`

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

const breakpoints: Theme.BreakpointsInterface = {
  mobileS: withTypeBreakpoint(sizes.mobileS),
  mobileM: withTypeBreakpoint(sizes.mobileM),
  mobileL: withTypeBreakpoint(sizes.mobileL),
  tablet: withTypeBreakpoint(sizes.tablet),
  laptop: withTypeBreakpoint(sizes.laptop),
  laptopL: withTypeBreakpoint(sizes.laptopL),
  desktop: withTypeBreakpoint(sizes.desktop),
  desktopL: withTypeBreakpoint(sizes.desktop),
}

export default breakpoints
