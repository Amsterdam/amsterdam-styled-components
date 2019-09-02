import styled from '@datapunt/asc-core'
import { themeColor, focusStyleOutline } from '../../utils'

const InputStyle = styled.input.attrs({
  type: 'text',
  autoCapitalize: 'off',
  autoComplete: 'off',
  autoCorrect: 'off',
  spellCheck: false,
})`
  appearance: none;
  font-size: 1rem;
  border: solid 1px ${themeColor('tint', 'level5')};
  border-radius: 0;
  box-sizing: border-box;
  line-height: 18px;
  padding: 10px;
  width: 100%;
  ${focusStyleOutline(2, 0.5)}

  &:hover {
    border-color: ${themeColor('tint', 'level6')};
  }
`

export default InputStyle
