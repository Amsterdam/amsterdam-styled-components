import styled from 'styled-components'
// import { svgFill, themeColor } from '../../utils'
// import { IconStyle } from '../Icon'

export type Props = {
  id: string
  className?: string
}

export const WrapperStyle = styled.span``

export default styled.input.attrs({
  type: 'checkbox',
})<Props>`
  background-color: red;
  cursor: inherit;
  margin: 0;
  padding: 4px;
`

type LabelProps = {
  htmlFor: string
}

export const LabelStyle = styled.label<LabelProps>`
  display: flex;
  background-color: yellow;
  height: 44px;
  width: 80px;
  border-radius: 22px;
`

export const KnobStyle = styled.span`
  position: inline-block;
  display: absolute;
  background-color: red;
  height: 44px;
  width: 44px;
  border-radius: 50%;
`
