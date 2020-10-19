import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../../utils/themeUtils'
import Icon from '../../Icon'

export interface liProps {
  href: string
}

export default styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  white-space: nowrap;

  a {
    align-self: center;
    font-size: 14px;
    line-height: 20px;
    color: ${themeColor('tint', 'level5')};
    text-decoration: none;
    text-decoration-color: ${themeColor('tint', 'level5')};
    margin: ${themeSpacing(0, 2, 0, 0)};

    &:hover {
      color: ${themeColor('secondary', 'main')};
      text-decoration: underline;
    }

    &:focus {
      outline: auto;
      outline-color: ${themeColor('support', 'focus')};
      outline-style: solid;
      outline-width: 2px;
      outline-offset: 4px;
    }
  }
`

export const StyledIcon = styled(Icon)`
  align-self: center;
  display: inline-block;
  padding: ${themeSpacing(0, 2, 0, 0)};
`
