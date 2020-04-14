import { useEffect, useState } from 'react'
import { Theme } from '@datapunt/asc-core'
import { ascDefaultTheme } from '../../index'

const breakpoints = Object.keys(ascDefaultTheme.breakpoints).reduce(
  (acc, key) => ({
    ...acc,
    [key]: ascDefaultTheme.breakpoints[key]('min-width'),
    [`${key}Max`]: ascDefaultTheme.breakpoints[key]('max-width'),
  }),

  {},
)

export type Arguments = {
  query?: string
  minBreakpoint?: keyof Theme.BreakpointsInterface
  maxBreakpoint?: keyof Theme.BreakpointsInterface
}

export const WARNING_MESSAGES = {
  noProps: 'You must pass a query, minBreakpoint, or maxBreakpoint',
  bothQueryAndOther:
    'You are using both the query from and a minBreakpoint or a maxBreakpoint. The query prop will be ignored.',
}

const useMatchMedia = ({ minBreakpoint, maxBreakpoint, query }: Arguments) => {
  let mediaQuery = query

  if (minBreakpoint && maxBreakpoint) {
    mediaQuery = `${breakpoints[minBreakpoint]} and ${
      breakpoints[`${maxBreakpoint}Max`]
    }`
  } else if (minBreakpoint || maxBreakpoint) {
    mediaQuery = breakpoints[minBreakpoint || `${maxBreakpoint}Max`]
  }

  const [isMatch, setIsMatch] = useState(
    mediaQuery ? window.matchMedia(mediaQuery).matches : false,
  )

  const handleMediaQueryListEvent = ({
    matches,
  }: MediaQueryListEvent | MediaQueryList) => setIsMatch(matches)

  if (query && (minBreakpoint || maxBreakpoint)) {
    // eslint-disable-next-line no-console
    console.warn(WARNING_MESSAGES.bothQueryAndOther)
  }

  useEffect(() => {
    let matchMedia: undefined | MediaQueryList
    if (mediaQuery) {
      matchMedia = window.matchMedia(mediaQuery)
      handleMediaQueryListEvent(matchMedia)

      matchMedia.addEventListener('change', handleMediaQueryListEvent)
    } else {
      // eslint-disable-next-line no-console
      console.warn(WARNING_MESSAGES.noProps)
    }
    return () => {
      if (matchMedia) {
        matchMedia.removeEventListener('change', handleMediaQueryListEvent)
      }
    }
  }, [])

  return [isMatch]
}

export default useMatchMedia
