import styled from 'styled-components'
import { themeColor } from '../../utils/themeUtils'

export type Props = {
  id: string
  left: string
  right: string
  defaultValue: string
  className?: string
}

export const WrapperStyle = styled.span`
  input:checked + label {
    background-color: ${themeColor('secondary')};
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
  width: 0;
  height: 0;
`

type LabelProps = {
  htmlFor: string
}

export const LabelStyle = styled.label<LabelProps>`
  background-color: ${themeColor('tint', 'level3')};
  padding: 10px 20px;
`
