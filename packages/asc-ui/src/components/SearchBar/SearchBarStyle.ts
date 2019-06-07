import styled, { css } from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { svgFill } from '../../utils'
import TextFieldStyle from '../TextField/TextFieldStyle'

type Props = {
  css?: string
}

const SearchBarStyle = styled.div<Props>`
  display: flex;

  ${TextFieldStyle} {
    flex-grow: 1;
  }

  & > ${IconButtonStyle} {
    margin-left: 5px;
    padding: 10px;
    width: 40px;
    height: 40px;
    & svg {
      ${svgFill('tint', 'level1')};
    }
  }

  ${props =>
    props.css &&
    css`
      ${props.css}
    `}
`

export default SearchBarStyle
