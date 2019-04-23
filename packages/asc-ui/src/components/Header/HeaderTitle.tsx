import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderTitleShortStyle from '../../styles/components/HeaderStyle/HeaderTitleShortStyle'

type Props = {
  title: string
  homeLink: string
}

const HeaderTitle: React.FC<Props> = ({ title, homeLink, ...otherProps }) => (
  <HeaderTitleShortStyle {...otherProps}>
    <h1>
      <HeaderLogo homeLink={homeLink} />
      <span>
        <a href={homeLink}>{title}</a>
      </span>
    </h1>
  </HeaderTitleShortStyle>
)

export default HeaderTitle
