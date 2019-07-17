import styled from '@datapunt/asc-core'
import ContentStyle, { Props as ContentStyleProps } from './ContentStyle'
import { customCss } from '../../utils'

export interface Props extends ContentStyleProps {
  wrapReverse?: string
  noWrap?: string
  justifyContent?: string
  justifyCenter?: string
  alignItems?: string
  alignCenter?: string
  alignContent?: string
  column?: string
}

export default styled(ContentStyle)<Props>`
  display: flex;
  flex-wrap: ${props => {
    if (props.wrapReverse) return 'wrap-reverse'
    if (props.noWrap) return 'nowrap'
    return 'wrap'
  }};
  justify-content: ${props => {
    if (props.justifyContent) return props.justifyContent
    if (props.justifyCenter) return 'center'
    return 'flex-start'
  }};
  align-items: ${props => {
    if (props.alignItems) return props.alignItems
    if (props.alignCenter) return 'center'
    return 'flex-start'
  }};
  align-content: ${props => {
    if (props.alignContent) return props.alignContent
    return 'stretch'
  }};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  ${customCss}
`
