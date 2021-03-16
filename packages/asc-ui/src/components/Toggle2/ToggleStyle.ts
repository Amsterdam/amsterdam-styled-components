import styled from 'styled-components'
import { themeColor } from '../../utils/themeUtils'

export type Props = {
  id: string
  left: string
  right: string
  className?: string
}

export const WrapperStyle = styled.span<Props>`
  input:checked + span {
    right: 0;
    left: auto;
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
`

export const KnobStyle = styled.span`
  background-color: ${themeColor('secondary')};
`
