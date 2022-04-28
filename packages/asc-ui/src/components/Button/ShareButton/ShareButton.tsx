import type { HTMLAttributes } from 'react'
import Icon from '../../Icon'
import type { Props as ShareButtonStyleProps } from './ShareButtonStyle'
import ShareButtonStyle from './ShareButtonStyle'

type Props = {
  iconSize?: number
} & ShareButtonStyleProps &
  HTMLAttributes<HTMLButtonElement>

function ShareButton({
  children,
  onClick,
  iconSize,
  title,
  ...otherProps
}: Props) {
  return (
    <ShareButtonStyle
      data-testid="share-button"
      size={30}
      onClick={onClick}
      variant="blank"
      title={title}
      aria-label={title}
      {...otherProps}
    >
      <Icon size={iconSize}>{children}</Icon>
    </ShareButtonStyle>
  )
}

export default ShareButton
