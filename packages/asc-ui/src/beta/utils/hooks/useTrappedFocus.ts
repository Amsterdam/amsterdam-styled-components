import type { KeyboardEvent, RefObject } from 'react'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../ownerDocument'

export const focusableElements = [
  'a[href]:not([disabled])',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
]

const useTrappedFocus = (ref: RefObject<HTMLElement>) => {
  const keyDown = (e: KeyboardEvent) => {
    if (ref.current) {
      const element = ref.current

      const focusableEls = element.querySelectorAll(
        focusableElements.join(', '),
      )

      const firstFocusableEl = focusableEls[0]
      const lastFocusableEl = focusableEls[focusableEls.length - 1]
      const isTabPressed = e.key === KeyboardKeys.Tab

      if (!isTabPressed) {
        return
      }

      if (e.shiftKey) {
        if (ownerDocument(element).activeElement === firstFocusableEl) {
          if (lastFocusableEl instanceof HTMLElement) {
            lastFocusableEl.focus()
            e.preventDefault()
          }
        }
      } else if (ownerDocument(element).activeElement === lastFocusableEl) {
        if (firstFocusableEl instanceof HTMLElement) {
          firstFocusableEl.focus()
          e.preventDefault()
        }
      }
    }
  }

  return {
    keyDown,
  }
}

export default useTrappedFocus
