import React from 'react'
import HeaderStyle, {
  HeaderStyleProps,
} from '../../styles/components/HeaderStyle'
import HeaderLogo from './HeaderLogo'

type Props = HeaderStyleProps

const HeaderTitle: React.FC<Props> = ({ ...otherProps }) => (
  <HeaderStyle {...otherProps}>
    <h1>
      <HeaderLogo homeLink="https://data.amsterdam.nl" />
    </h1>
  </HeaderStyle>
)

export default HeaderTitle
