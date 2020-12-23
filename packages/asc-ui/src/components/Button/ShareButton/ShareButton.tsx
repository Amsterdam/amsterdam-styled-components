import React, { FunctionComponent, HTMLAttributes } from 'react'
import Icon from '../../Icon'
import ShareButtonStyle, {
  Props as ShareButtonStyleProps,
} from './ShareButtonStyle'

type Props = {
  iconSize?: number
} & ShareButtonStyleProps &
  HTMLAttributes<HTMLButtonElement>

const ShareButton: FunctionComponent<Props> = ({
  children,
  onClick,
  iconSize,
  title,
  ...otherProps
}) => (
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

export default ShareButton
