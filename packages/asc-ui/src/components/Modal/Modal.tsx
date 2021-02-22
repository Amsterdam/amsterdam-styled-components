import {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  KeyboardEvent,
  useEffect,
  useRef,
} from 'react'
import ModalStyle from './ModalStyle'
import { KeyboardKeys } from '../../types'
import useTrappedFocus, {
  focusableElements,
} from '../../utils/hooks/useTrappedFocus'
import BackDrop, { Props as BackDropProps } from '../BackDrop/BackDrop'
import Portal, { Props as PortalProps } from '../Portal'

export type Props = {
  open: boolean
  onClose?: () => void
  disablePortal?: boolean
  blurredNodeSelector?: string
} & BackDropProps &
  PortalProps &
  HTMLAttributes<HTMLElement>

const Modal: FunctionComponent<Props> = ({
  open,
  disablePortal,
  children,
  backdropOpacity,
  element,
  blurredNodeSelector,
  onClose,
  ...otherProps
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { keyDown } = useTrappedFocus(ref)
  const previouslyFocusedElement = document.activeElement

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
      <BackDrop backdropOpacity={backdropOpacity} onClick={handleClose} />
      <ModalStyle
        role="dialog"
        aria-modal="true"
        ref={ref}
        onKeyDown={handleKeyDown}
        {...otherProps}
      >
        {children}
      </ModalStyle>
    </Wrapper>
  ) : null
}

export default Modal
