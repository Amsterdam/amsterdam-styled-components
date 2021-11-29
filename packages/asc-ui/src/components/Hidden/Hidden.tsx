import type { FunctionComponent } from 'react'
import type { Arguments } from '../../utils/hooks/useMatchMedia'
import useMatchMedia from '../../utils/hooks/useMatchMedia'

// Use this to wrap around components that should only render when matching a certain media query
const Hidden: FunctionComponent<Arguments> = ({
  query,
  minBreakpoint,
  maxBreakpoint,
  children,
}) => {
  const [isMatch] = useMatchMedia({
    query,
    minBreakpoint,
    maxBreakpoint,
  })

  return isMatch ? null : <>{children}</>
}

export default Hidden
