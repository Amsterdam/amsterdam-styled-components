import styled from '@datapunt/asc-core'

type Props = {
  flexDirection?: string
  flexWrap?: string
}

const FlexStyle = styled.div<Props>`
  width: 100%;
`
export default FlexStyle
