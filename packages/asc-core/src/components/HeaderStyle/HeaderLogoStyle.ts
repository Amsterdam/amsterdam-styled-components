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
  min-height: 50px;

  & > svg {
    height: 30px;
    width: 10px;
    left: 0px;
  }
`

export const HeaderLogoTextStyle = styled.span`
  & > span {
    color: #ec0000;
    display: block;
    margin: 0 0 0 30px;
    padding: 0;

    font-size: 10px;
    margin: 0 0 0 11px;
  }
`

export default HeaderLogoStyle
