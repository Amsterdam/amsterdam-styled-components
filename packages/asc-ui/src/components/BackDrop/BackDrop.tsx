import React, {
  MouseEvent as ReactMouseEvent,
  FunctionComponent,
  HTMLAttributes,
} from 'react'
import BackDropStyle, { Props } from './BackDropStyle'

const BackDrop: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({
  backdropOpacity,
  onClick,
  ...otherProps
}) => {
  const handleOnClick = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <BackDropStyle
      backdropOpacity={backdropOpacity}
      onClick={handleOnClick}
      {...otherProps}
    />
  )
}

export { Props }
export default BackDrop
