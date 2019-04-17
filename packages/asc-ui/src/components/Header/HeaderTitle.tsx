import React from 'react'
import HeaderLogo from './HeaderLogo'
import styled from '../../styled-components'

type Props = {
  title: string
}

const HeaderTitleStyle = styled.div<{}>`
  & > h1 {
    margin: 0;
    min-height: 50px;
    position: relative;
    font-size: 1.8125em;
    line-height: 1.37931em;
    background-color: #ccc;

    @media screen and (max-width: 1023px) {
      margin: 0px;
    }

    @media screen and (min-width: 1024px) {
      margin: 0px;
    }
  }

  & > h1 > span {
    display: block;
    line-height: 1.5625rem;
    margin-left: 85px;
    padding-top: 6px;
  }

  & > h1 > span > a {
    color: #000;
    text-decoration: none;
    line-height: 2.1875rem;

    @media screen and (max-width: 360px) {
      line-height: 18px;
      font-size: 14px;
    }

    @media screen and (min-width: 361px) {
      line-height: 20px;
      font-size: 16px;
    }
  }
`

const homeLink: string = 'https://data.amsterdam.nl'

const HeaderTitle: React.FC<Props> = ({ title, ...otherProps }) => (
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
