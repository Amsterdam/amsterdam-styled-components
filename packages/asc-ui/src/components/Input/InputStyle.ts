import styled from '@datapunt/asc-core'
import { color } from '../../utils'

const InputStyle = styled.input.attrs({
  type: 'text',
  autoCapitalize: 'off',
  autoComplete: 'off',
  autoCorrect: 'off',
  spellCheck: false,
})`
  appearance: none;
  font-size: 1rem;
  border: solid 1px ${color('tint', 'level5')};
  border-radius: 0;
  box-sizing: border-box;
  padding: 10px 10px;
  width: 100%;
`

export default InputStyle
