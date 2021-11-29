import type { FunctionComponent } from 'react'
import type { Props } from './MenuButtonStyle'
import MenuButtonStyle, {
  MenuButtonTextStyle,
  MenuButtonTextWrapperStyle,
} from './MenuButtonStyle'

const MenuButton: FunctionComponent<Props> = ({
  children,
  as,
  ...otherProps
}) => (
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
