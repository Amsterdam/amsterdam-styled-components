import React from 'react'
import { ChevronDown, ChevronUp } from '@datapunt/asc-assets'
import Icon from '../../Icon'
import { ToggleHeaderProps } from '../../Toggle'
import { ExpandableFooterHeading } from './FooterHeading'

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
