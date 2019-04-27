import React from 'react'
import HeaderTallTitleStyle from '../../styles/components/HeaderStyle/HeaderTallTitleStyle'
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
  <HeaderTallTitleStyle href={homeLink} {...otherProps}>
    <h1>
      <HeaderTallLogo homeLink={homeLink} />
      <div>
        <span>{title}</span>
      </div>
    </h1>
  </HeaderTallTitleStyle>
)

export default HeaderTallTitle
