import React from 'react'
import { KeyboardKeys } from '../../types'
import { FOCUSABLE_ELEMENTS } from './constants'

const useFocusWithArrows = (
  ref: React.RefObject<HTMLElement>,
  rotating = false,
) => {
  const keyDown = (e: React.KeyboardEvent) => {
    if (ref.current) {
      const element = ref.current

      const { activeElement } = window.document

      const focusableEls: Array<Element> = Array.from(
        element.querySelectorAll(FOCUSABLE_ELEMENTS.join(', ')),
      )

      const getIndex = (el: Element | null) => {
        return el && focusableEls.includes(el) ? focusableEls.indexOf(el) : 0
      }

      let el

      switch (e.key) {
        case KeyboardKeys.ArrowDown: {
          if (getIndex(activeElement) !== focusableEls.length - 1) {
            el = focusableEls[getIndex(activeElement) + 1]
            // If there is nothing focussed yet, set the focus on the first element
            if (activeElement && !focusableEls.includes(activeElement)) {
              ;[el] = focusableEls
            }
          } else if (rotating) {
            ;[el] = focusableEls
          }

          break
        }

        case KeyboardKeys.ArrowUp: {
          if (getIndex(activeElement) !== 0) {
            el = focusableEls[getIndex(activeElement) - 1]
          } else if (rotating) {
            el = focusableEls[focusableEls.length - 1]
          }
          break
        }

        case KeyboardKeys.Home: {
          ;[el] = focusableEls
          break
        }

        case KeyboardKeys.End: {
          el = focusableEls[focusableEls.length - 1]
          break
        }

        default:
      }

      if (
        (e.key === KeyboardKeys.ArrowDown ||
          e.key === KeyboardKeys.ArrowUp ||
          e.key === KeyboardKeys.Home ||
          e.key === KeyboardKeys.End) &&
        el instanceof HTMLElement
      ) {
        el.focus()
        e.preventDefault()
      }
    }
  }

  return {
    keyDown,
  }
}

export default useFocusWithArrows
