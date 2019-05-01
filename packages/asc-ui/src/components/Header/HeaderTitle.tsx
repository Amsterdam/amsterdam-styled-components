import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderTitleStyle from '../../styles/components/HeaderStyle/HeaderTitleStyle'

type Props = {
  title: string
  homeLink: string
}

const HeaderTitle: React.FC<Props> = ({ title, homeLink, ...otherProps }) => (
  <HeaderTitleStyle {...otherProps}>
    <h1>
      <HeaderLogo homeLink={homeLink} />
      <span>
        <a href={homeLink}>{title}</a>
      </span>
    </h1>
  </HeaderTitleStyle>
)

export default HeaderTitle
