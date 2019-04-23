import React from 'react'
// import HeaderTitleStyle from '../../styles/components/HeaderStyle/HeaderTitleStyle'
import HeaderTallLogo from './HeaderTallLogo'
import styled from '../../styled-components'

type Props = {
  title: string
  homeLink: string
}

const HeaderTallTitleStyle = styled.div`
  & > h1 {
    display: flex;
    height: 100%;
    margin: 0;
  }

  & > h1 > span {
    display: inline-block;
    padding: 20px;
  }

  & > h1 > span > a {
    color: #000;
    text-decoration: none;
    line-height: 26px;
    font-size: 26px;
    vertical-align: top;
  }
`

const HeaderTallTitle: React.FC<Props> = ({
  title,
  homeLink,
  ...otherProps
}) => (
  <HeaderTallTitleStyle {...otherProps}>
    <h1>
      <HeaderTallLogo homeLink={homeLink} />
      <span>
        <a href={homeLink}>{title}</a>
      </span>
    </h1>
  </HeaderTallTitleStyle>
)

export default HeaderTallTitle
