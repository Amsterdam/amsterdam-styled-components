import React from 'react'
import styled from '../../styled-components'

type Props = {
  homeLink?: string
}

const HeaderLogoStyle = styled.a<{}>`
  float: left;
  min-height: 68px;
  color: #767676;
  text-decoration: none;

  @media screen and (max-width: 1023px) {
    min-height: 50px;
    padding: 10px;
  }
`

const LogoSetStyle = styled.span<{}>`
  position: absolute;
  top: 0;
  display: inline-block;
  min-height: 68px;
  font-size: 100%;

  &::before {
    content: '';
    display: block;
    font-family: avenir next w01, arial, sans-serif;
    font-weight: 400;
    height: 0;
    position: absolute;
    width: 0;
  }

  &::after {
    content: '';
    display: block;
    font-family: avenir next w01, arial, sans-serif;
    font-weight: 700;
    height: 0;
    position: absolute;
    width: 0;
  }

  @media screen and (max-width: 1023px) {
    min-height: 50px;
  }

  @media screen and (min-width: 1024px) {
    top: 1px;
  }

  & > img {
    height: 68px;

    @media screen and (max-width: 1023px) {
      height: 30px;
      padding-top: 10px;
    }

    /* @media screen and (max-width: 539px) and (min-width: 361px) {
      height: 41px;
    } */
  }
`

const LogoTextStyle = styled.span`
  color: #767676;
  line-height: 1.25em;

  & > span {
    font-size: 0.8125rem;
    color: #ec0000;
    line-height: 1em;
    display: block;
    margin: 0 0 0 30px;
    padding: 0;

    @media screen and (max-width: 1023px) {
      font-size: 10px;
      margin: 0 0 0 11px;
    }

    /* @media screen and (max-width: 539px) and (min-width: 361px) {
      font-size: 0.875rem;
      margin: 0 0 0 22px;
    } */
  }
`

const HeaderLogo: React.FC<Props> = ({ homeLink }) => (
  <HeaderLogoStyle href={homeLink}>
    <LogoSetStyle>
      <img
        src="https://www.amsterdam.nl/views/core/images/logos/andreas.svg"
        alt="Gemeente Amsterdam"
      />
    </LogoSetStyle>
    <LogoTextStyle>
      <span>Gemeente</span>
      <span>Amsterdam</span>
    </LogoTextStyle>
  </HeaderLogoStyle>
)

export default HeaderLogo
