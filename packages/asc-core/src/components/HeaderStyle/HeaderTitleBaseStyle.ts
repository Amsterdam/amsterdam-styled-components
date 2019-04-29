import styled from '../../styled-components'

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

export default HeaderTitleBaseStyle
