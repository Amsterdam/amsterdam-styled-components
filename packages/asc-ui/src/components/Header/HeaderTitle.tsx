import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderTitleShortStyle from '../../styles/components/HeaderStyle/HeaderTitleShortStyle'

type Props = {
  title: string
  homeLink: string
}

const HeaderTitle: React.FC<Props> = ({ title, homeLink, ...otherProps }) => (
  <HeaderTitleShortStyle href={homeLink} {...otherProps}>
    <h1>
      <HeaderLogo />
      <div>
        <span>{title}</span>
      </div>
    </h1>
  </HeaderTitleShortStyle>
)

export default HeaderTitle
