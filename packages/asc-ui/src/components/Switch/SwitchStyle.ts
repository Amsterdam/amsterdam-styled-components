import styled from 'styled-components'
// import { svgFill, themeColor } from '../../utils'
// import { IconStyle } from '../Icon'

export type Props = {
  id: string
  checked?: boolean
  disabled?: boolean
  error?: boolean
  indeterminate?: boolean
}

export default styled.input.attrs({
  type: 'checkbox',
})<Props>`
  background-color: red;
  cursor: inherit;
  margin: 0;
  padding: 4px;
`

export type LabelProps = {
  htmlFor: string
}

export const LabelStyle = styled.label<LabelProps>`
  background-color: yellow;
  height: 44px;
  width: 80px;
  border-radius: 22px;
`
