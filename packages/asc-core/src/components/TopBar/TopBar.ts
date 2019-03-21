import styled from '../../styled-components'

type Props = {}

const TopBar = styled.header<Props>`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 0;
  min-height: 54px;
  padding: 0 15px;

  // ie11 fix
  &:after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`

export default TopBar
