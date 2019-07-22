import React from 'react'
import HeaderLogoTextStyle from './HeaderLogoTextStyle'
import AmsterdamLogo from '../AmsterdamLogo'
import HeaderTitle from './HeaderTitle'

type Props = {
  homeLink: string
  tall?: boolean
} & React.HTMLAttributes<HTMLHeadingElement>

const HeaderLogoText: React.FC<Props> = ({
  title,
  homeLink,
  tall,
  ...otherProps
}) => (
  <HeaderLogoTextStyle tall={tall} {...otherProps}>
    <AmsterdamLogo href={homeLink} tall={tall} />
    {title && <HeaderTitle href={homeLink}>{title}</HeaderTitle>}
  </HeaderLogoTextStyle>
)

export default HeaderLogoText
