import React, { HTMLAttributes } from 'react'
import BackDropStyle, { Props } from './BackDropStyle'

const BackDrop: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  backdropOpacity,
  onClick,
  ...otherProps
}) => {
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
