import { ChevronDown } from '@amsterdam/asc-assets'
import React from 'react'
import { ShowHideTypes } from '../../utils'
import Hidden from '../Hidden'
import Icon from '../Icon/Icon'
import { ToggleHandlerProps } from '../Toggle'
import FooterHeading from './FooterHeading'
import {
  FooterContentWrapper,
  StyledButton,
  StyledFooterHeading,
  StyledFooterToggle,
} from './FooterSectionStyle'

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
