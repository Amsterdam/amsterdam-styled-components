import React from 'react'
import { ChevronDown } from '@datapunt/asc-assets'
import { ShowHideTypes } from '../../utils'
import FooterHeading from './FooterHeading'
import Icon from '../Icon/Icon'
import {
  FooterContentWrapper,
  StyledButton,
  StyledFooterHeading,
  StyledFooterToggle,
} from './FooterSectionStyle'
import { ToggleHandlerProps } from '../Toggle'
import Hidden from '../Hidden'

type FooterContentProps = {
  title?: string
} & ShowHideTypes

const ToggleFooterHeader: React.FC<ToggleHandlerProps> = ({
  open,
  onClick,
  title,
}) => (
  <StyledButton variant="blank" onClick={onClick}>
    <StyledFooterHeading>
      <Icon rotate={open ? 180 : 0} size={20}>
        <ChevronDown />
      </Icon>
      {title && title}
    </StyledFooterHeading>
  </StyledButton>
)

const FooterSection: React.FC<FooterContentProps> = ({
  title,
  children,
  ...otherProps
}) => (
  <>
    <Hidden minBreakpoint="tabletM">
      <StyledFooterToggle
        ToggleHandler={ToggleFooterHeader}
        title={title}
        align="left"
        {...otherProps}
      >
        <FooterContentWrapper>{children}</FooterContentWrapper>
      </StyledFooterToggle>
    </Hidden>
    <Hidden maxBreakpoint="tabletM">
      <FooterContentWrapper>
        <FooterHeading>{title}</FooterHeading>
        {children}
      </FooterContentWrapper>
    </Hidden>
  </>
)

export default FooterSection
