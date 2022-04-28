import type { MouseEvent as ReactMouseEvent, HTMLAttributes } from 'react'
import BackDropStyle, { Props } from './BackDropStyle'

function BackDrop({
  backdropOpacity,
  onClick,
  ...otherProps
}: Props & HTMLAttributes<HTMLDivElement>) {
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
