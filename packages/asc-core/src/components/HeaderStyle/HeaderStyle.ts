import styled from '../../styled-components'

export type Props = {}

const HeaderStyle = styled.div<Props>`
  display: flex;
  min-height: 50px;
`

export const HeaderGridWrapper = styled.div<Props>`
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'AvenirNextLTW01-Regular', arial, sans-serif;
`
export const HeaderGridContainer = styled.div<Props>`
  background-color: rgba(255, 255, 0, 0.1);
  margin: 0;
`
export default HeaderStyle
