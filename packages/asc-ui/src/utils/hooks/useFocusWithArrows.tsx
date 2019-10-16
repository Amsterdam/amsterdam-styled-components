import React from 'react'
import { KeyboardKeys } from '../../types'
import { FOCUSABLE_ELEMENTS } from './constants'

const useFocusWithArrows = (ref: React.RefObject<HTMLElement>) => {
  const keyDown = (e: React.EventHandler<React.KeyboardEvent> & any) => {
    if (ref.current) {
      const element = ref.current

      const { activeElement } = window.document

      const focusableEls: Array<HTMLElement> = Array.from(
        element.querySelectorAll(FOCUSABLE_ELEMENTS.join(', ')),
      )

      const getIndex = (el: any) => {
        return focusableEls.includes(el) ? focusableEls.indexOf(el) : 0
      }

      switch (e.key) {
        case KeyboardKeys.ArrowDown:
          if (getIndex(activeElement) !== focusableEls.length - 1) {
            focusableEls[getIndex(activeElement) + 1].focus()
            e.preventDefault()
          }
          break

        case KeyboardKeys.ArrowUp:
          if (getIndex(activeElement) !== 0) {
            focusableEls[getIndex(activeElement) - 1].focus()
            e.preventDefault()
          }
          break

        default:
      }
    }
  }

  return {
    keyDown,
  }
}

export default useFocusWithArrows
