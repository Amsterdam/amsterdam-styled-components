import React from 'react'
import { ChevronRight } from '@datapunt/asc-assets'
import LinkListItemStyle from './LinkListItemStyle'
import Link, { Props as LinkProps } from '../Typography/Link'
import Icon from '../Icon'
import Typography from '../Typography'

type Props = {
  fileInfo?: string
} & LinkProps

const LinkListItem: React.FC<Props> = ({
  children,
  fileInfo,
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
      {fileInfo && <Typography as="small">{fileInfo}</Typography>}
    </Link>
  </LinkListItemStyle>
)

export default LinkListItem
