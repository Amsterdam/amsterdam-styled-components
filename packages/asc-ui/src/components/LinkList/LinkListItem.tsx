import React from 'react'
import { ChevronRight } from '@datapunt/asc-assets'
import LinkListItemStyle from './LinkListItemStyle'
import Link, { Props as LinkProps } from '../Link/Link'
import Icon from '../Icon'
import Typography from '../Typography'

type Props = {
  meta?: string
} & LinkProps

const LinkListItem: React.FC<Props> = ({
  children,
  meta,
  href,
  title,
  rel,
}) => (
  <LinkListItemStyle>
    <Link {...{ href, title, rel }}>
      <Icon size={12}>
        <ChevronRight />
      </Icon>
      {children}
      {meta && <Typography as="small">{meta}</Typography>}
    </Link>
  </LinkListItemStyle>
)

export default LinkListItem
