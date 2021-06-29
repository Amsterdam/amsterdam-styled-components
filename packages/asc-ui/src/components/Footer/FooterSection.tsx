import { ChevronDown } from '@amsterdam/asc-assets'
import { FunctionComponent } from 'react'
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
  ssr?: boolean
} & ShowHideTypes

type ConditionalWrapperProps = {
  condition: boolean
  wrapper: (wrapperChildren: JSX.Element) => JSX.Element
  children: JSX.Element
}

const ToggleFooterHeader: FunctionComponent<ToggleHandlerProps> = ({
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

const ConditionalWrapper: FunctionComponent<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children)

const FooterSection: FunctionComponent<FooterContentProps> = ({
  title,
  ssr,
  children,
  ...otherProps
}) => (
  <>
    <ConditionalWrapper
      condition={!ssr}
      wrapper={(wrapperChildren) => (
        <Hidden minBreakpoint="tabletM">{wrapperChildren}</Hidden>
      )}
    >
      <StyledFooterToggle
        ToggleHandler={ToggleFooterHeader}
        title={title}
        align="left"
        {...otherProps}
      >
        <FooterContentWrapper>{children}</FooterContentWrapper>
      </StyledFooterToggle>
    </ConditionalWrapper>
    <ConditionalWrapper
      condition={!ssr}
      wrapper={(wrapperChildren) => (
        <Hidden maxBreakpoint="tabletM">{wrapperChildren}</Hidden>
      )}
    >
      <FooterContentWrapper ssr={ssr}>
        <FooterHeading>{title}</FooterHeading>
        {children}
      </FooterContentWrapper>
    </ConditionalWrapper>
  </>
)

export default FooterSection
