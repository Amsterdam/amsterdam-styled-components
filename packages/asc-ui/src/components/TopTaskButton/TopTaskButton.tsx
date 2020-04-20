import React, { AnchorHTMLAttributes } from 'react'
import Icon from '../Icon'
import TopTaskButtonStyle, { ParagraphStyle } from './TopTaskButtonStyle'

export interface TopTaskButtonProps {
  icon?: React.ElementType
  text: string
  onDarkBackground?: boolean
}

const TopTaskButton: React.FC<
  TopTaskButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ icon, text, ...otherProps }) => {
  const CustomIcon = icon

  return (
    <TopTaskButtonStyle {...otherProps} data-testid="root">
      {CustomIcon && (
        <Icon inline size={32} padding={0} data-testid="icon">
          <CustomIcon />
        </Icon>
      )}
      <ParagraphStyle styleAs="h4" strong>
        {text}
      </ParagraphStyle>
    </TopTaskButtonStyle>
  )
}

export default TopTaskButton
