import React from 'react'
import { KeyboardKeys } from '../../types'

function useActionOnEscape(callback: () => void) {
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === KeyboardKeys.Escape) {
      callback()
    }
  }

  return {
    onKeyDown,
  }
}

export default useActionOnEscape
