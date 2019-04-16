import styled from '../../styled-components'

export type Props = {}

const HeaderStyle = styled.div<Props>`
  // TODO remove when ready
  /* display: flex; */
  /* background-color: lightgrey; */
`

export const HeaderGridWrapper = styled.div<Props>`
  background-color: green;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'AvenirNextLTW01-Regular', arial, sans-serif;

  @media screen and (min-width: 1024px) {
    background-color: red;
    max-width: 1400px;
  }
`
export const HeaderGridContainer = styled.div<Props>`
  background-color: #fff222;
  margin: 0;
  /* display: block; */

  @media screen and (max-width: 1023px) and (min-width: 540px) {
    /* max-width: 480px; */
  }

  @media screen and (min-width: 1024px) {
    /* max-width: 960px; */
  }
`
export const HeaderGridZone = styled.div<Props>`
  position: relative;

  @media screen and (min-width: 1024px) {
    box-sizing: border-box;
    width: 100%;
    float: left;
  }
`

export default HeaderStyle
