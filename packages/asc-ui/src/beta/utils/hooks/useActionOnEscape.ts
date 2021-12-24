import type { KeyboardEvent } from 'react'
import { KeyboardKeys } from '../../types'

function useActionOnEscape(callback: () => void) {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === KeyboardKeys.Escape) {
      callback()
    }
  }

  return {
    onKeyDown,
  }
}

export default useActionOnEscape
