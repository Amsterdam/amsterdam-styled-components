import styled from '../../styled-components'

export type Props = {
  padding?: number
}

const ButtonBar = styled.div<Props>`
  display: flex;
  ${({ padding }) => `padding: ${padding}px;`}

  & > * {
    margin-right: 5px;
  }
`

ButtonBar.defaultProps = {
  padding: 5,
}

export default ButtonBar
