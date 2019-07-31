import React from 'react'
import { styledComponents } from '@datapunt/asc-core'
import { ChevronRight } from '@datapunt/asc-assets'
import LinkStyle, { Props as LinkStyleProps } from './LinkStyle'
import Icon from '../Icon'

export type Props = styledComponents.StyledProps<any> & LinkStyleProps

const Link: React.FC<Props> = ({ children, linkType, ...otherProps }) => (
  <LinkStyle $as="a" {...otherProps} linkType={linkType}>
    {linkType === 'default-chevron' && (
      <Icon size={12}>
        <ChevronRight />
      </Icon>
    )}

    {children}
  </LinkStyle>
)

export default Link
