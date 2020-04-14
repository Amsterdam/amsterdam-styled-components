import React from 'react'
import useMatchMedia, { Arguments } from '../../utils/hooks/useMatchMedia'

// Use this to wrap around components that should only render when matching a certain media query
const Hidden: React.FC<Arguments> = ({
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
