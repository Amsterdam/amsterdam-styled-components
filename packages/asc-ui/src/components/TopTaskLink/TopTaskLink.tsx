import React, { AnchorHTMLAttributes } from 'react'
import Icon from '../Icon'
import TopTaskLinkStyle, { TopTaskText, TopTaskTitle } from './TopTaskLinkStyle'

export interface TopTaskLinkProps {
  icon?: React.ElementType
  title: string
  text?: string
  /**
   * @deprecated use prop darkBackground instead
   */
  onDarkBackground?: boolean
  darkBackground?: boolean
}

const TopTaskLink: React.FC<
  TopTaskLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ icon, title, text, ...otherProps }) => {
  const CustomIcon = icon

  return (
    <TopTaskLinkStyle {...otherProps} data-testid="root">
      {CustomIcon && (
        <Icon inline size={32} padding={0} data-testid="icon">
          <CustomIcon />
        </Icon>
      )}
      <TopTaskTitle styleAs="h4" strong>
        {title}
      </TopTaskTitle>
      {text && <TopTaskText>{text}</TopTaskText>}
    </TopTaskLinkStyle>
  )
}

export default TopTaskLink
