import React from 'react'
import HeaderShortLogo from './HeaderShortLogo'
import HeaderShortTitleStyle from '../../styles/components/HeaderStyle/HeaderShortTitleStyle'

type Props = {
  title: string
  homeLink: string
}

const HeaderTitleShort: React.FC<Props> = ({
  title,
  homeLink,
  ...otherProps
}) => (
  <HeaderShortTitleStyle {...otherProps}>
    <h1>
      <a href={homeLink}>
        <HeaderShortLogo />
        <div>
          <span>{title}</span>
        </div>
      </a>
    </h1>
  </HeaderShortTitleStyle>
)

export default HeaderTitleShort
