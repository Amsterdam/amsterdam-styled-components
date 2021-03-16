import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils/themeUtils'

export type Props = {
  id: string
  className?: string
}

export const WrapperStyle = styled.span`
  input:checked + span {
    right: 0;
    left: auto;
  }
`

export default styled.input.attrs({
  type: 'checkbox',
})<Props>`
  opacity: 0;
`

type LabelProps = {
  htmlFor: string
}

export const LabelStyle = styled.label<LabelProps>`
  position: relative;
  display: inline-block;
  background-color: ${themeColor('tint', 'level3')};
  height: 44px;
  width: 88px;
  border-radius: 22px;
`

export const KnobStyle = styled.span`
  position: absolute;
  left: 0;
  right: auto;
  display: inline-block;
  background-color: ${themeColor('secondary')};
  height: 52px;
  width: 52px;
  border-radius: 50%;
  margin: ${themeSpacing(-1)};
`
