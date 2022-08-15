import type { HTMLAttributes, KeyboardEvent } from 'react'
import { Fragment, useEffect, useMemo, useRef } from 'react'
import ModalStyle from './ModalStyle'
import { KeyboardKeys } from '../../types'
import useTrappedFocus, {
  focusableElements,
} from '../../utils/hooks/useTrappedFocus'
import type { Props as BackDropProps } from '../BackDrop/BackDrop'
import BackDrop from '../BackDrop/BackDrop'
import type { Props as PortalProps } from '../Portal'
import Portal from '../Portal'

export type Props = {
  open: boolean
  onClose?: () => void
  disablePortal?: boolean
  blurredNodeSelector?: string
} & BackDropProps &
  PortalProps &
  HTMLAttributes<HTMLElement>

function Modal({
  open,
  disablePortal,
  children,
  backdropOpacity,
  element,
  blurredNodeSelector,
  onClose,
  zIndexOffset,
  ...otherProps
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { keyDown } = useTrappedFocus(ref)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const previouslyFocusedElement = useMemo(() => document.activeElement, [open])

  useEffect(() => {
    if (!open || !ref.current) {
      return
    }

    const firstFocusableEl = ref.current.querySelector(
      focusableElements.join(', '),
    )

    if (firstFocusableEl instanceof HTMLElement) {
      firstFocusableEl.focus()
    }
  }, [open])

  const handleClose = () => {
    if (onClose) {
      if (previouslyFocusedElement instanceof HTMLElement) {
        previouslyFocusedElement.focus()
      }
      onClose()
    }
  }
  const handleKeyDown = (event: KeyboardEvent) => {
    keyDown(event)

    if (event.key === KeyboardKeys.Escape) {
      event.stopPropagation()
      handleClose()
    }
  }

  // React createPortal is not supported for SSR
  const Wrapper = disablePortal ? Fragment : Portal

  return open ? (
    <Wrapper
      {...(!disablePortal
        ? {
            element,
            blurredNode: blurredNodeSelector
              ? (window.document.querySelector(
                  blurredNodeSelector,
                ) as HTMLElement)
              : undefined,
          }
        : {})}
    >
      <BackDrop
        backdropOpacity={backdropOpacity}
        onClick={handleClose}
        zIndexOffset={zIndexOffset}
      />
      <ModalStyle
        role="dialog"
        aria-modal="true"
        ref={ref}
        onKeyDown={handleKeyDown}
        zIndexOffset={zIndexOffset}
        {...otherProps}
      >
        {children}
      </ModalStyle>
    </Wrapper>
  ) : null
}

export default Modal
