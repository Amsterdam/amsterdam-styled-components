import React from 'react'
import MenuButtonStyle, {
  MenuButtonTextStyle,
  MenuButtonTextWrapperStyle,
  Props,
} from './MenuButtonStyle'

const MenuButton: React.FC<Props> = ({ children, as, ...otherProps }) => (
  <MenuButtonStyle
    forwardedAs={as}
    iconSize={14}
    variant="blank"
    {...otherProps}
  >
    <MenuButtonTextWrapperStyle>
      <MenuButtonTextStyle>{children}</MenuButtonTextStyle>
    </MenuButtonTextWrapperStyle>
  </MenuButtonStyle>
)

export default MenuButton
