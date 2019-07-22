import React from 'react'
import AmsterdamLogoStyle, { LogoStyle } from './AmsterdamLogoStyle'

type Props = {
  tall?: boolean
} & React.HTMLAttributes<HTMLAnchorElement>

const AmsterdamLogo: React.FC<Props> = ({ tall, ...otherProps }) => (
  <AmsterdamLogoStyle {...{ tall }} {...otherProps}>
    <LogoStyle />
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo
