import { StyledComponent } from 'styled-components'
import { em, margin } from 'polished'
import styled, { css } from '../../styled-components'

type Props = {}

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'a'

const headings = css`
  font-weight: 900;
`

const extendedStyles = {
  h1: headings,
  h2: headings,
  h3: headings,
  h4: css`${headings}
    font-size: 18px;
  `,
  h5: css`${headings}
    font-size: 18px;
  `,
  h6: headings,
  p: '',
  a: '',
}

const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key]

export default (element: Variant): StyledComponent<any, any> => styled(element)<Props>`
    ${getProperty(extendedStyles, element)}
    ${margin(em('8px'), 0)};
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `
