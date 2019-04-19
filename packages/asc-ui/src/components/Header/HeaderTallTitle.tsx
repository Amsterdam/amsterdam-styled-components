import React from 'react'
import HeaderTitleStyle from '../../styles/components/HeaderStyle/HeaderTitleStyle'
import HeaderTallLogo from './HeaderTallLogo'

type Props = {
  title: string
  homeLink: string
}

const HeaderTallTitle: React.FC<Props> = ({
  title,
  homeLink,
  ...otherProps
}) => (
  <HeaderTitleStyle {...otherProps}>
    <h1>
      <HeaderTallLogo homeLink={homeLink} />
      <span>
        <a href={homeLink}>{title}</a>
      </span>
    </h1>
  </HeaderTitleStyle>
)

export default HeaderTallTitle
