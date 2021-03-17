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
    background-color: red;
  }
`

type RadioProps = {
  role: string
  id: string
  type: string
}

export default styled.input.attrs({
  type: 'radio',
})<RadioProps>``

type LabelProps = {
  htmlFor: string
}

export const LabelStyle = styled.label<LabelProps>`
  background-color: ${themeColor('tint', 'level3')};
  padding: 10px 20px;
`

export const KnobStyle = styled.span`
  background-color: ${themeColor('secondary')};
`
