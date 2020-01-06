import React from 'react'
import styled from '@datapunt/asc-core'
import { position } from 'polished'
import Focus from '../Focus'
import ModalStyle, { ModalStyleContainer } from './ModalStyle'
import { KeyboardKeys } from '../../types'
import useTrappedFocus from '../../utils/hooks/useTrappedFocus'
import BackDrop, { Props as BackDropProps } from '../BackDrop/BackDrop'
import { BACKDROP_Z_INDEX } from '../shared/constants'

export type Props = {
  open: boolean
  onClose?: Function
} & BackDropProps &
  React.HTMLAttributes<HTMLElement>

const StyledFocus = styled(Focus)`
  ${position('fixed', 0, 0, 0, 0)};
  z-index: ${BACKDROP_Z_INDEX + 1};
  pointer-events: none;
`

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

  return open ? (
    <BackDrop
      disablePortal={disablePortal}
      blurredNodeSelector={blurredNodeSelector}
      element={element}
      backdropOpacity={backdropOpacity}
      onClick={handleClose}
    >
      <StyledFocus onKeyDown={handleKeyDown}>
        <ModalStyleContainer {...otherProps} className={className}>
          <ModalStyle role="dialog" ref={ref} onKeyDown={keyDown}>
            {children}
          </ModalStyle>
        </ModalStyleContainer>
      </StyledFocus>
    </BackDrop>
  ) : null
}

export default Modal
