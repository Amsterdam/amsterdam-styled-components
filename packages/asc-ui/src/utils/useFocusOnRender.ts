import * as React from 'react'

function useFocusOnRender(ref: any = null) {
  React.useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus()
    }
  }, [])
}

export default useFocusOnRender
