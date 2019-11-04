import React from 'react'
import MenuButtonStyle, {
  MenuButtonTextStyle,
  MenuButtonTextWrapperStyle,
  Props,
} from './MenuButtonStyle'

const MenuButton: React.FC<Props> = ({ children, ...otherProps }) => (
  <MenuButtonStyle iconSize={14} variant="blank" {...otherProps}>
    <MenuButtonTextWrapperStyle>
      <MenuButtonTextStyle>{children}</MenuButtonTextStyle>
    </MenuButtonTextWrapperStyle>
  </MenuButtonStyle>
)

export default MenuButton
