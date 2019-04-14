import styled from '../../styled-components'

export type Props = {
  padding?: number
}

const ButtonBarStyle = styled.div<Props>`
  display: flex;
  ${({ padding }) => `padding: ${padding}px;`}

  & > * {
    margin-right: 5px;
  }
`

ButtonBarStyle.defaultProps = {
  padding: 5,
}

export default ButtonBarStyle
