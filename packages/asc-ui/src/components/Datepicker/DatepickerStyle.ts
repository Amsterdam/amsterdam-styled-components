import styled from 'styled-components'
import Input from '../Input'

export interface Props {
  value?: string
}
export default styled.div<Props>`
  padding: 0;
  margin: 0;
`

export const StyledInput = styled(Input)`
  width: 282px;
`
