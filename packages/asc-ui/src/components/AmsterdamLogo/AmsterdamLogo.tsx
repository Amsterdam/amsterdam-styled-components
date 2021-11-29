import type { FunctionComponent } from 'react'
import type { LogoProps } from '../Header/HeaderLogoText'
import Hidden from '../Hidden'
import AmsterdamLogoStyle, {
  LogoShortStyle,
  LogoTallStyle,
  LogoShortStyleSSR,
  LogoTallStyleSSR,
  LogoTitleStyle,
} from './AmsterdamLogoStyle'

const AmsterdamLogo: FunctionComponent<LogoProps> = ({
  tall,
  title = 'Gemeente Amsterdam',
  ssr,
  ...otherProps
}) => (
  <AmsterdamLogoStyle tall={tall} {...otherProps}>
    {tall && ssr && (
      <>
        <LogoShortStyleSSR />
        <LogoTallStyleSSR />
      </>
    )}
    {tall && !ssr && (
      <>
        <Hidden minBreakpoint="laptopM">
          <LogoShortStyle />
        </Hidden>
        <Hidden maxBreakpoint="laptopM">
          <LogoTallStyle />
        </Hidden>
      </>
    )}
    {!tall && <LogoShortStyle />}
    <LogoTitleStyle>{title}</LogoTitleStyle>
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo
