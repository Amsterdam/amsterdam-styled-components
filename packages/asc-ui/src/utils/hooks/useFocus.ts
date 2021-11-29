import type { RefObject } from 'react'
import { useEffect } from 'react'

/**
 * A hook that will automatically bring the referenced element into focus.
 *
 * @param ref The reference to the element that should be brought into focus.
 * @param shouldFocus Whether the element should be focussed or not. Useful if you want to bring the element into focus at a later time. Defaults to `true`.
 */
function useFocus(ref: RefObject<HTMLElement>, shouldFocus = true) {
  useEffect(() => {
    if (shouldFocus && ref.current) {
      ref.current.focus()
    }
  }, [ref, shouldFocus])
}

export default useFocus
