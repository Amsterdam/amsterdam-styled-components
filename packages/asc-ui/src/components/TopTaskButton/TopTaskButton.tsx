import React, { AnchorHTMLAttributes } from 'react'
import Icon from '../Icon'
import TopTaskButtonStyle, {
  TopTaskText,
  TopTaskTitle,
} from './TopTaskButtonStyle'

export interface TopTaskButtonProps {
  icon?: React.ElementType
  title: string
  text?: string
  onDarkBackground?: boolean
}

const TopTaskButton: React.FC<
  TopTaskButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ icon, title, text, ...otherProps }) => {
  const CustomIcon = icon

  return (
    <TopTaskButtonStyle {...otherProps} data-testid="root">
      {CustomIcon && (
        <Icon inline size={32} padding={0} data-testid="icon">
          <CustomIcon />
        </Icon>
      )}
      <TopTaskTitle styleAs="h4" strong>
        {title}
      </TopTaskTitle>
      {text && <TopTaskText>{text}</TopTaskText>}
    </TopTaskButtonStyle>
  )
}

export default TopTaskButton
