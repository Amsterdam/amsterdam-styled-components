import styled from 'styled-components'
import { themeColor } from '@datapunt/asc-ui'

export interface liProps {
  href: string
}

export default styled.li`
  a {
    color: ${themeColor('tint', 'level5')};
    text-decoration: none;
    text-decoration-color: ${themeColor('tint', 'level5')};

    &:hover {
      color: ${themeColor('secondary', 'main')};
      text-decoration: underline;
    }

    *:focus {
      outline: auto;
      outline-color: ${themeColor('support', 'focus')};
      outline-style: solid;
      outline-width: 2px;
      outline-offset: 4px;
    }
  }
`
