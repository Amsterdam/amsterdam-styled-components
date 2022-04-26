import type { Arguments } from '../../utils/hooks/useMatchMedia'
import useMatchMedia from '../../utils/hooks/useMatchMedia'

// Use this to wrap around components that should only render when matching a certain media query
function Hidden({ query, minBreakpoint, maxBreakpoint, children }: Arguments) {
  const [isMatch] = useMatchMedia({
    query,
    minBreakpoint,
    maxBreakpoint,
  })

  return isMatch ? null : { children }
}

export default Hidden
