import React from 'react'
import Portal, { Props as PortalProps } from '../Portal/Portal'
import Focus from '../Focus'
import ModalStyle, { ModalStyleContainer } from './ModalStyle'
import BackDropStyle from '../BackDrop/BackDropStyle'
import { KeyboardKeys } from '../../types'
import useTrappedFocus from '../../utils/hooks/useTrappedFocus'

export type Props = {
  open: boolean
  onClose?: Function
  disablePortal?: boolean
  backdropOpacity?: number
  blurredNodeSelector?: string
} & PortalProps &
  React.HTMLAttributes<HTMLElement>

const Modal: React.FC<Props> = ({
  open,
  disablePortal,
  children,
  backdropOpacity,
  element,
  blurredNodeSelector,
  className,
  onClose,
  ...other
}) => {
  let renderedTimer: number = 0

  const ref: any = React.useRef<HTMLDivElement>()
  const { keyDown } = useTrappedFocus(ref)

  const focus = () => {
    const { current: node } = ref
    if (node) {
      clearTimeout(renderedTimer)
      renderedTimer = setTimeout(() => {
        node.focus()
      })
    }
  }
  React.useEffect(() => {
    focus()
    return () => {
      clearTimeout(renderedTimer)
    }
  }, [])

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === KeyboardKeys.Escape) {
      event.stopPropagation()
      handleClose()
    }
  }
  const Element = disablePortal ? 'div' : Portal

  return open ? (
    <Element
      className={className}
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
      <Focus onKeyDown={handleKeyDown}>
        <ModalStyleContainer {...other}>
          <BackDropStyle
            backdropOpacity={backdropOpacity}
            onClick={handleClose}
          />
          <ModalStyle role="dialog" ref={ref} onKeyDown={keyDown}>
            {children}
          </ModalStyle>
        </ModalStyleContainer>
      </Focus>
    </Element>
  ) : null
}

export default Modal
