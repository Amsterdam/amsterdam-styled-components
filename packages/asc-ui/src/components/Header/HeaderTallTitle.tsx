import React from 'react'
// import HeaderTallTitleStyle from '../../styles/components/HeaderStyle/HeaderTallTitleStyle'
import HeaderTallLogo from './HeaderTallLogo'
import styled from '../../styled-components'

type Props = {
  title: string
  homeLink: string
}

const HeaderTitleBaseStyle = styled.div`
  & > h1 {
    height: 100%;
    margin: 0;
    font-family: 'AvenirNextLTW01-Demi';
    font-weight: bold;
  }

  & > h1 > a {
    display: inline-flex;
    align-content: flex-start;
    color: #000;
    text-decoration: none;
  }

  & > h1 > div > span {
    display: inline-block;
  }
`

const HeaderTallTitleStyle = styled(HeaderTitleBaseStyle)`
  & > h1 > a > div {
  }

  & > h1 > a > div > span {
    background-color: papayawhip;
    /* line-height: 20px; */
    font-size: 30px;
  }
`

const HeaderTallTitle: React.FC<Props> = ({
  title,
  homeLink,
  ...otherProps
}) => (
  <HeaderTallTitleStyle {...otherProps}>
    <h1>
      <a href={homeLink}>
        <HeaderTallLogo />
        <div>
          <span>{title}</span>
        </div>
      </a>
    </h1>
  </HeaderTallTitleStyle>
)

export default HeaderTallTitle
