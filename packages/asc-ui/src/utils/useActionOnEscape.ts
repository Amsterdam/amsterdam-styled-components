import React from 'react'
import { KeyboardKeys } from '../types'

function useActionOnEscape(callback: Function) {
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === KeyboardKeys.Escape) {
      event.stopPropagation()
      callback()
    }
  }

  return {
    onKeyDown,
  }
}

export default useActionOnEscape
