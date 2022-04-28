import type { PropsWithChildren } from 'react'
import type { Arguments } from '../../utils/hooks/useMatchMedia'
import useMatchMedia from '../../utils/hooks/useMatchMedia'

// Use this to wrap around components that should only render when matching a certain media query
function Hidden({
  query,
  minBreakpoint,
  maxBreakpoint,
  children,
}: PropsWithChildren<Arguments>) {
  const [isMatch] = useMatchMedia({
    query,
    minBreakpoint,
    maxBreakpoint,
  })

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isMatch ? null : <>{children}</>
}

export default Hidden
