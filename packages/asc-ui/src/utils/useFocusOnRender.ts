import * as React from 'react'

function useFocusOnRender(ref: any = null, shouldFocus: boolean = false) {
  React.useEffect(() => {
    if (shouldFocus && ref && ref.current) {
      ref.current.focus()
    }
  }, [ref, shouldFocus])
}

export default useFocusOnRender
