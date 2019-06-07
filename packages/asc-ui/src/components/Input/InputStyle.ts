import styled from '@datapunt/asc-core'
import { color, focusStyleOutline } from '../../utils'

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
  padding: 9px 9px 11px;
  width: 100%;
  ${focusStyleOutline(2, 0.5)}

  &:hover {
    border-color: ${color('tint', 'level6')};
  }
`

export default InputStyle
