import type { Theme } from '../../types'

const withTypeBreakpoint = (size: number) => (type: Theme.TypeBreakpoint) =>
  `(${type}: ${size + (type === 'max-width' ? -1 : 0)}px)`

export const size = 820

const breakpoint = withTypeBreakpoint(size)

export default breakpoint
