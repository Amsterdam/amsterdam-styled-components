import { FunctionComponent } from 'react'
import { LogoProps } from '../Header/HeaderLogoText'
import Hidden from '../Hidden'
import AmsterdamLogoStyle, {
  LogoShortStyle,
  LogoTallStyle,
  LogoTitleStyle,
} from './AmsterdamLogoStyle'

const AmsterdamLogo: FunctionComponent<LogoProps> = ({
  tall,
  title = 'Gemeente Amsterdam',
  ...otherProps
}) => (
  <AmsterdamLogoStyle tall={tall} {...otherProps}>
    {tall ? (
      <>
        <Hidden minBreakpoint="laptopM">
          <LogoShortStyle />
        </Hidden>
        <Hidden maxBreakpoint="laptopM">
          <LogoTallStyle />
        </Hidden>
      </>
    ) : (
      <LogoShortStyle />
    )}
    <LogoTitleStyle>{title}</LogoTitleStyle>
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo
