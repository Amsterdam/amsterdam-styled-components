import styled, { css } from '@datapunt/asc-core'
import Link, { Props as LinkProps } from '../Link/Link'
import { themeColor, themeSpacing } from '../../utils'

export type Props = {
  active?: boolean
} & LinkProps

export default styled(Link)<Props>`
  display: block;
  padding: ${themeSpacing(3)};
  border-left: 4px solid transparent;
  font-weight: 400;
  ${({ active }) =>
    active &&
    css`
      font-weight: 700;
      border-color: ${themeColor('primary')};
      outline: 1px solid ${themeColor('primary')};
    `}
`
