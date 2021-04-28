import { useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (ref: any, callback: () => void) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (callback) {
          callback()
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref, callback])
}

export default useClickOutside
