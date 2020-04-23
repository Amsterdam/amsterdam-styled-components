import styled from 'styled-components'
import { inputCss } from '../Input'

type StyleProps = {
  error?: boolean
}

const TextAreaStyle = styled.textarea<StyleProps>`
  ${inputCss}
`

export default TextAreaStyle
