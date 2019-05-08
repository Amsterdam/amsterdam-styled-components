import React from 'react'
import AmsterdamLogoStyle, {
  LogoStyle,
} from '../../styles/components/AmsterdamLogo/AmsterdamLogoStyle'

type Props = {
  tall?: boolean
  href?: string
}

const AmsterdamLogo: React.FC<Props> = ({ tall, ...otherProps }) => (
  <AmsterdamLogoStyle {...{ tall }} {...otherProps}>
    <LogoStyle />
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo
