import React from 'react'

function useFocusOnClear(ref: any, inputValue: any) {
  React.useEffect(() => {
    if (ref && ref.current && inputValue === '') {
      ref.current.focus()
    }
  }, [inputValue])
}

export default useFocusOnClear
