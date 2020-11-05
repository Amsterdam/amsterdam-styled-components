import React, { FunctionComponent } from 'react'
import useMatchMedia, { Arguments } from '../../utils/hooks/useMatchMedia'

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
