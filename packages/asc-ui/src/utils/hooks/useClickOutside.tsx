import { useEffect, RefObject } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: () => void,
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (typeof handler === 'function') {
          handler()
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref, handler])
}

export default useClickOutside
