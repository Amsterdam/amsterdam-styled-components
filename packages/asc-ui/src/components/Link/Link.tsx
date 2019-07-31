import React from 'react'
import { styledComponents } from '@datapunt/asc-core'
import { ChevronRight } from '@datapunt/asc-assets'
import LinkStyle, { Props as LinkStyleProps } from './LinkStyle'
import Icon from '../Icon'

export type Props = {
  noIcon?: boolean
} & styledComponents.StyledProps<any> &
  LinkStyleProps

const Link: React.FC<Props> = ({
  children,
  noIcon,
  linkType,
  ...otherProps
}) => (
  <LinkStyle $as="a" {...otherProps} linkType={linkType}>
    {linkType === 'default' && !noIcon && (
      <Icon size={12}>
        <ChevronRight />
      </Icon>
    )}

    {children}
  </LinkStyle>
)

export default Link
