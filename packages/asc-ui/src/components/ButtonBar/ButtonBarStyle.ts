import styled from '@datapunt/asc-core'

export type Props = {}

const ButtonBarStyle = styled.div<Props>`
  display: flex;

  & > * {
    margin-right: 5px;
  }
`

export default ButtonBarStyle
