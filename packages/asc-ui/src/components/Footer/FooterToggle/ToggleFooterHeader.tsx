import React from 'react'
import styled from '@datapunt/asc-core'
import { ChevronDown } from '@datapunt/asc-assets'
import Icon from '../../Icon'
import { ToggleHandlerProps } from '../../Toggle'
import IconStyle from '../../Icon/IconStyle'
import { FooterHeading } from '../index'
import { svgFill } from '../../../utils'

export type Props = ToggleHandlerProps

const ToggleFooterHeader: React.FC<Props> = ({ open, onClick, title }) => {
  const StyledFooterHeading: any = styled(FooterHeading)<Props>`
    margin-bottom: ${({ open: isOpen }) => (isOpen ? '0' : '8px')};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }

    & > ${IconStyle} {
      margin-right: 8px;
      ${svgFill('tint', 'level1')};
    }
  `

  return (
    <StyledFooterHeading $as="h3" onClick={onClick}>
      <Icon rotate={open ? 180 : 0} size={20}>
        <ChevronDown />
      </Icon>
      {title && title}
    </StyledFooterHeading>
  )
}

export default ToggleFooterHeader
