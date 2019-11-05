import styled from '@datapunt/asc-core'

export type Props = {
  disabled?: boolean
  name?: string
}

export default styled.div<Props>`
  border: 1px solid;
`
