import styled from 'styled-components'
import { themeSpacing } from '../../utils'
import Input from '../Input'
// import Icon from '../Icon/Icon'

export interface Props {
  id?: string
  value?: string
}
export default styled.div<Props>`
  padding: 0;
  margin: 0;
`

export const StyledInput = styled(Input)`
  width: 282px;
`

export const StyledLabel = styled.label`
  position: absolute;
  margin-left: ${themeSpacing(-8)};
  display: inline-block;
  margin-top: ${themeSpacing(3)};
  width: 20px;
  height: 20px;
`
