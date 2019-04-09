import styled from 'styled-components'

export type Props = {
  padding?: number
}

const StyledButtonBar = styled.div<Props>`
  display: flex;
  ${({ padding }) => `padding: ${padding}px;`}

  & > * {
    margin-right: 5px;
  }
`

StyledButtonBar.defaultProps = {
  padding: 5,
}

export default StyledButtonBar
