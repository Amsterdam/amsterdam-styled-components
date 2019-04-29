import React from 'react'
import HeaderTitleTallStyle from '../../styles/components/HeaderStyle/HeaderTitleTallStyle'
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
  <HeaderTitleTallStyle {...otherProps}>
    <h1>
      <a href={homeLink}>
        <HeaderTallLogo />
        <div>
          <span>{title}</span>
        </div>
      </a>
    </h1>
  </HeaderTitleTallStyle>
)

export default HeaderTallTitle
