import React from 'react'
import Portal, { Props as PortalProps } from '../Portal/Portal'
import BackDropStyle, { Props as StyleProps } from './BackDropStyle'

export type Props = {
  blurredNodeSelector?: string
  onClick?: any
} & StyleProps &
  PortalProps

const BackDrop: React.FC<Props> = ({
  backdropOpacity,
  blurredNodeSelector,
  element,
  children,
  hideOverFlow,
  ...otherProps
}) => (
  <Portal
    {...{
      element,
      blurredNode: blurredNodeSelector
        ? (window.document.querySelector(blurredNodeSelector) as HTMLElement)
        : undefined,
      hideOverFlow,
    }}
  >
    <BackDropStyle backdropOpacity={backdropOpacity} {...otherProps}>
      {children}
    </BackDropStyle>
  </Portal>
)

export default BackDrop
