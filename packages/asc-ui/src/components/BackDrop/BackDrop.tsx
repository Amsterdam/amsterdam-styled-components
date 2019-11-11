import React from 'react'
import Portal, { Props as PortalProps } from '../Portal/Portal'
import BackDropStyle, { Props as StyleProps } from './BackDropStyle'

export type Props = {
  disablePortal?: boolean
  blurredNodeSelector?: string
  onClick?: any
} & StyleProps &
  PortalProps

const BackDrop: React.FC<Props> = ({
  backdropOpacity,
  blurredNodeSelector,
  disablePortal,
  element,
  children,
  hideOverFlow,
  ...otherProps
}) => {
  const Element = disablePortal ? React.Fragment : Portal

  return (
    <Element
      {...(!disablePortal
        ? {
            element,
            blurredNode: blurredNodeSelector
              ? (window.document.querySelector(
                  blurredNodeSelector,
                ) as HTMLElement)
              : undefined,
            hideOverFlow,
          }
        : {})}
    >
      <BackDropStyle backdropOpacity={backdropOpacity} {...otherProps}>
        {children}
      </BackDropStyle>
    </Element>
  )
}

export default BackDrop
