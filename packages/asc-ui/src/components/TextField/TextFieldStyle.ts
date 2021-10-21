import styled from 'styled-components'
import Button from '../Button'
import { themeSpacing } from '../../utils'

const TextFieldStyle = styled.div`
  position: relative;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const CloseButton = styled(Button)`
  position: absolute;
  right: ${themeSpacing(2)};
  top: 50%;
  transform: translateY(-50%);
`

export default TextFieldStyle
