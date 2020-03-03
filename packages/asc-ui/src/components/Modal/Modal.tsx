import React from 'react'
import ModalStyle, { ModalStyleContainer, ModalFocus } from './ModalStyle'
import { KeyboardKeys } from '../../types'
import useTrappedFocus from '../../utils/hooks/useTrappedFocus'
import BackDrop, { Props as BackDropProps } from '../BackDrop/BackDrop'

const Z_INDEX_OFFSET = 2

export type Props = {
  open: boolean
  onClose?: Function
} & BackDropProps &
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
  const ref = React.useRef<HTMLDivElement>(null)
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

  return open ? (
    <BackDrop
      disablePortal={disablePortal}
      blurredNodeSelector={blurredNodeSelector}
      element={element}
      backdropOpacity={backdropOpacity}
      onClick={handleClose}
      zIndexOffset={Z_INDEX_OFFSET}
    >
      <ModalFocus zIndexOffset={Z_INDEX_OFFSET} onKeyDown={handleKeyDown}>
        <ModalStyleContainer {...otherProps} className={className}>
          <ModalStyle role="dialog" ref={ref} onKeyDown={keyDown}>
            {children}
          </ModalStyle>
        </ModalStyleContainer>
      </ModalFocus>
    </BackDrop>
  ) : null
}

export default Modal
