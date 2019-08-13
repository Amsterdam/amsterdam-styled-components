import React from 'react'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../ownerDocument'

const FocusableElements = [
  'a[href]:not([disabled])',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input[type="text"]:not([disabled])',
  'input[type="radio"]:not([disabled])',
  'input[type="checkbox"]:not([disabled])',
  'select:not([disabled])',
]

const useTrappedFocus = (ref: any) => {
  const keyDown = (e: React.EventHandler<React.KeyboardEvent> & any) => {
    if (ref.current) {
      const element = ref.current

      const focusableEls = element.querySelectorAll(
        FocusableElements.join(', '),
      )

      const firstFocusableEl = focusableEls[0]
      const lastFocusableEl = focusableEls[focusableEls.length - 1]
      const isTabPressed = e.key === KeyboardKeys.Tab

      if (!isTabPressed) {
        return
      }

      if (e.shiftKey) {
        if (ownerDocument(element).activeElement === firstFocusableEl) {
          lastFocusableEl.focus()
          e.preventDefault()
        }
      } else if (ownerDocument(element).activeElement === lastFocusableEl) {
        firstFocusableEl.focus()
        e.preventDefault()
      }
    }
  }

  return {
    keyDown,
  }
}

export default useTrappedFocus
