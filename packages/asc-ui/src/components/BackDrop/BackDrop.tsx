import React from 'react'
import Portal, { Props as PortalProps } from '../Portal/Portal'
import BackDropStyle, { Props as StyleProps } from './BackDropStyle'

export type Props = {
  disablePortal?: boolean
  blurredNodeSelector?: string
  onClick?: Function
} & StyleProps &
  PortalProps

const BackDrop: React.FC<Props> = ({
  backdropOpacity,
  blurredNodeSelector,
  disablePortal,
  element,
  children,
  hideOverFlow,
  onClick,
  ...otherProps
}) => {
  const Element = disablePortal ? React.Fragment : Portal

  const handleOnClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e)
    }
  }

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
      {children}
      <BackDropStyle
        backdropOpacity={backdropOpacity}
        onClick={handleOnClick}
        {...otherProps}
      />
    </Element>
  )
}

export default BackDrop
