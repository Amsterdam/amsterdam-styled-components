import styled from 'styled-components'
import { themeColor } from '../../utils/themeUtils'

export type Props = {
  id: string
  left: string
  right: string
  value: string
  className?: string
}

export const WrapperStyle = styled.span`
  input:checked + label {
    color: white;
    background-color: ${themeColor('secondary')};
    border: 2px solid ${themeColor('secondary')};
    padding: 12px 18px;
  }
`

type RadioProps = {
  role: string
  id: string
  type: string
}

export default styled.input.attrs({
  type: 'radio',
})<RadioProps>`
  opacity: 0;
  position: absolute;
`
// position: absolute Firefox error

type LabelProps = {
  htmlFor: string
}

export const LabelStyle = styled.label<LabelProps>`
  background-color: ${themeColor('tint', 'level3')};
  font-weight: bold;
  padding: 12px 20px;
`
