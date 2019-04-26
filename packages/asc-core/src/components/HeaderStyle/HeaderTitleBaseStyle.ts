import styled from '../../styled-components'

const HeaderTitleBaseStyle = styled.a`
  color: #000;
  text-decoration: none;

  & > h1 {
    display: flex;
    height: 100%;
    margin: 0;
    font-family: 'AvenirNextLTW01-Demi';
    font-weight: normal;
  }

  & > h1 > div > span {
    display: inline-block;
  }
`

export default HeaderTitleBaseStyle
