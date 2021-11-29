import styled from 'styled-components'
import { inputCss } from '../Input'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type StyleProps = {
  error?: boolean
}

const TextAreaStyle = styled.textarea<StyleProps>`
  ${inputCss}
`

export default TextAreaStyle
