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
  ...otherProps
}) => {
  const ref: any = React.useRef<HTMLDivElement>()
  const { keyDown } = useTrappedFocus(ref)

  React.useEffect(() => {
    let renderedTimer: number = 0
    const { current: node } = ref
    if (node) {
      clearTimeout(renderedTimer)
      renderedTimer = setTimeout(() => {
        node.focus()
      })
    }
    return () => {
      clearTimeout(renderedTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <ModalStyleContainer {...otherProps}>
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
