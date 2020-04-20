import styled from 'styled-components'
import Button from '../Button'
import { themeColor, themeSpacing } from '../../utils'

export default styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${themeColor('tint', 'level3')};
`

export const PagerButton = styled(Button)`
  &:first-of-type {
    border-right: 1px solid ${themeColor('tint', 'level3')};
  }

  &:last-of-type {
    border-left: 1px solid ${themeColor('tint', 'level3')};
  }
`

export const PagerText = styled.span`
  padding: 0 ${themeSpacing(2)};
  margin: 0 auto;
`
