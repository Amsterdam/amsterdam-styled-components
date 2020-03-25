import styled, { css } from '@datapunt/asc-core'
import ButtonStyle from '../Button/ButtonStyle'
import { themeSpacing } from '../../utils'

export type Props = {
  hasLabel?: boolean
}

const TextFieldStyle = styled.div<Props>`
  position: relative;
  ${({ hasLabel }) =>
    hasLabel &&
    css`
      margin-top: ${themeSpacing(2)};
    `}

  & > ${ButtonStyle} {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`

export default TextFieldStyle
