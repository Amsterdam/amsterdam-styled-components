import type { Props } from './MenuButtonStyle'
import MenuButtonStyle, {
  MenuButtonTextStyle,
  MenuButtonTextWrapperStyle,
} from './MenuButtonStyle'

function MenuButton({ children, as, ...otherProps }: Props) {
  return (
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
}

export default MenuButton
