import React from 'react'
import LinkListItemStyle, {
  Props as LinkListItemStyleProps,
} from './LinkListItemStyle'
import Link, { Props as LinkProps } from '../Link/Link'

type Props = LinkProps & LinkListItemStyleProps

const LinkListItem: React.FC<Props> = ({
  children,
  href,
  title,
  rel,
  className,
}) => (
  <LinkListItemStyle {...{ className }}>
    <Link {...{ href, title, rel }} linkType="default">
      {children}
    </Link>
  </LinkListItemStyle>
)

export default LinkListItem
