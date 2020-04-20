import styled from 'styled-components'

export type Props = {}

const ButtonBarStyle = styled.div<Props>`
  display: flex;

  & > * {
    margin-right: 5px;
  }
`

export default ButtonBarStyle
