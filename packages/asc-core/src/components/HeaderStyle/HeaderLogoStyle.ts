import styled from '../../styled-components'

const HeaderLogoStyle = styled.a<{}>`
  text-decoration: none;
  padding: 10px;
`

export const HeaderLogoSetStyle = styled.span<{}>`
  position: absolute;
  display: inline-block;
  min-height: 50px;
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

  min-height: 50px;

  & > svg {
    height: 30px;
  }
`

export const HeaderLogoTextStyle = styled.span`
  line-height: 1.25em;

  & > span {
    font-size: 0.8125rem;
    color: #ec0000;
    line-height: 1em;
    display: block;
    margin: 0 0 0 30px;
    padding: 0;

    font-size: 10px;
    margin: 0 0 0 11px;
  }
`

export default HeaderLogoStyle
