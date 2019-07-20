import React from 'react'
import { ChevronDown, ChevronUp } from '@datapunt/asc-assets'
import styled from '@datapunt/asc-core'
import Icon from '../../../Icon'
import { ToggleHeaderProps } from '../../../Toggle'
import Heading from '../../../Heading'
import { color, svgFill } from '../../../../utils'
import IconStyle from '../../../Icon/IconStyle'

export const FooterHeading = styled(Heading)`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${color('tint', 'level1')};
  display: flex;
`

export const ExpandableFooterHeading = styled(FooterHeading)`
  margin-bottom: ${({ open }) => (open ? '0' : '8px')};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  & > ${IconStyle} {
    margin-right: 8px;
    & > svg {
      ${svgFill('tint', 'level1')};
    }
  }
`

export type Props = {
  title?: string
} & ToggleHeaderProps

const ToggleFooterHeader: React.FC<Props> = ({
  iconOpen,
  iconClose,
  open,
  onClick,
  title,
}) => {
  const IconOpen = iconOpen || <ChevronDown />
  const IconClose = iconClose || <ChevronUp />
  return (
    <>
      <ExpandableFooterHeading as="h3" onClick={onClick}>
        <Icon size={20}>{open ? IconClose : IconOpen}</Icon>
        {title && title}
      </ExpandableFooterHeading>
    </>
  )
}

export default ToggleFooterHeader
