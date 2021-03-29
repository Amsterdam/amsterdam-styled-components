import { ChevronDown } from '@amsterdam/asc-assets'
import { FunctionComponent } from 'react'
import { ShowHideTypes } from '../../utils'
import Hidden from '../Hidden'
import Icon from '../Icon/Icon'
import { MenuToggleHandlerProps } from '../MenuToggle'
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

const ToggleFooterHeader: FunctionComponent<MenuToggleHandlerProps> = ({
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

const FooterSection: FunctionComponent<FooterContentProps> = ({
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
