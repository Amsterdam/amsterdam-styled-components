import React from 'react'

function useFocusOnRender(
  ref: React.RefObject<HTMLElement> | null = null,
  shouldFocus: boolean = false,
) {
  React.useEffect(() => {
    if (shouldFocus && ref && ref.current) {
      ref.current.focus()
    }
  }, [ref, shouldFocus])
}

export default useFocusOnRender
