import React from 'react'
import HeaderLogo from './HeaderLogo'
import styled from '../../styled-components'

type Props = {
  title: string
}

const HeaderTitleStyle = styled.div<{}>`
  & > h1 {
    margin: 20px 0;
    min-height: 50px;
    position: relative;
    font-size: 1.8125em;
    line-height: 1.37931em;
    background-color: #ccc;

    @media screen and (max-width: 360px) {
      margin: 0px;
    }

    @media screen and (max-width: 539px) and (min-width: 360px) {
      margin-right: 15px;
      margin: 10px 0;
    }

    @media screen and (max-width: 1023px) and (min-width: 540px) {
      margin-left: -15px;
      min-height: 68px;
    }

    @media screen and (min-width: 1024px) {
      margin-left: -30px;
    }
  }

  & > h1 > span {
    display: block;
    line-height: 1.5625rem;

    @media screen and (max-width: 360px) {
      margin-left: 85px;
      padding-top: 6px;
    }

    @media screen and (max-width: 539px) and (min-width: 361px) {
      margin-left: 120px;
      margin-top: -6px;
    }

    @media screen and (min-width: 540px) {
      margin-left: 140px;
      margin-top: -3px;
    }
  }

  & > h1 > span > a {
    color: #000;
    text-decoration: none;
    line-height: 2.1875rem;

    @media screen and (max-width: 360px) {
      line-height: 18px;
      font-size: 14px;
    }

    @media screen and (max-width: 539px) and (min-width: 361) {
      line-height: 1;
      /* font-size: 1.125rem; */
      font-size: 16px;
    }

    @media screen and (min-width: 540px) {
      /* font-size: 1.75rem; */
      font-size: 26px;
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
