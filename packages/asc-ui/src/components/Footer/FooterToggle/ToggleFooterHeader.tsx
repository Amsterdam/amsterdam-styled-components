import React from 'react'
import styled from 'styled-components'
import { ChevronDown } from '@datapunt/asc-assets'
import Icon from '../../Icon'
import { ToggleHandlerProps } from '../../Toggle'
import IconStyle from '../../Icon/IconStyle'
import FooterHeading from '../FooterHeading'
import { svgFill, themeColor } from '../../../utils'

export type Props = ToggleHandlerProps

const ToggleFooterHeader: React.FC<Props> = ({ open, onClick, title }) => {
  const StyledFooterHeading = styled(FooterHeading)<Props>`
    margin-bottom: ${({ open: isOpen }) => (isOpen ? '0' : '8px')};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }

    & > ${IconStyle} {
      margin-right: 8px;
      ${svgFill(themeColor('tint', 'level1'))};
    }
  `

  return (
    <StyledFooterHeading forwardedAs="h3" onClick={onClick}>
      <Icon rotate={open ? 180 : 0} size={20}>
        <ChevronDown />
      </Icon>
      {title && title}
    </StyledFooterHeading>
  )
}

export default ToggleFooterHeader
