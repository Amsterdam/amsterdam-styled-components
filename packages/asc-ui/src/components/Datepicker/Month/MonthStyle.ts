import styled from 'styled-components'
// import { themeColor, themeSpacing } from '../../../utils'

export interface Props {
  date?: string
}

export default styled.div<Props>`
  padding: 0;
  margin: 0;
  width: 224px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const Weekday = styled.span`
  display: inline-block;
  line-height: 18px;
  font-size: 14px;
  align-self: center;
  text-align: center;
  padding: 2px 0;
  width: 32px;
`
