import styled, { css } from 'styled-components'
import { svgFill, themeColor } from '../../utils'
import { IconStyle } from '../Icon'

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
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 6px;
  top: 6px;
`
