import styled, { css } from '@datapunt/asc-core'
import { themeColor, focusStyleOutline } from '../../utils'

type StyleProps = {
  error?: string | boolean
}

const InputStyle = styled.input<StyleProps>`
  appearance: none;
  font-size: 1rem;
  border: solid 1px ${themeColor('tint', 'level5')};
  border-radius: 0;
  box-sizing: border-box;
  line-height: 18px;
  padding: 10px;
  width: 100%;
  ${focusStyleOutline(2, 0.5)}
  ${({ error }) =>
    !error &&
    css`
      &:hover {
        border-color: ${themeColor('tint', 'level6')};
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: ${themeColor('secondary', 'main')};
    `}
`

export default InputStyle
