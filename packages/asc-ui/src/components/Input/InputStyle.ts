import styled, { css } from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'
import { INPUT_SIZE } from '../shared/constants'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type StyleProps = {
  error?: boolean
}

export const inputCss = css<StyleProps>`
  appearance: none;
  font-size: 16px;
  border: solid 1px ${themeColor('tint', 'level5')};
  border-radius: 0;
  box-sizing: border-box;
  line-height: 18px;
  padding: ${themeSpacing(2)};
  width: 100%;
  height: ${INPUT_SIZE}px;
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

const InputStyle = styled.input<StyleProps>`
  ${inputCss}
`

export default InputStyle
