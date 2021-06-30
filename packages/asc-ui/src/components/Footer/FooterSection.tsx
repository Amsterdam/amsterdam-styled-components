import { ChevronDown } from '@amsterdam/asc-assets'
import { FunctionComponent } from 'react'
import { Theme } from '../../types'
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
  toggleAt?: keyof Theme.BreakpointsInterface
  /**
   * @deprecated Use toggleAt instead.
   */
  hideAt?: keyof Theme.BreakpointsInterface
  /**
   * @deprecated Use toggleAt instead.
   */
  showAt?: keyof Theme.BreakpointsInterface
}

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
  toggleAt = 'tabletM',
  showAt,
  hideAt,
  children,
}) => {
  const breakpoint = showAt || hideAt || toggleAt

  return (
    <>
      <ConditionalWrapper
        condition={!ssr}
        wrapper={(wrapperChildren) => (
          <Hidden minBreakpoint={breakpoint}>{wrapperChildren}</Hidden>
        )}
      >
        <StyledFooterToggle
          ToggleHandler={ToggleFooterHeader}
          title={title}
          align="left"
          ssr={ssr}
          breakpoint={breakpoint}
        >
          <FooterContentWrapper>{children}</FooterContentWrapper>
        </StyledFooterToggle>
      </ConditionalWrapper>
      <ConditionalWrapper
        condition={!ssr}
        wrapper={(wrapperChildren) => (
          <Hidden maxBreakpoint={breakpoint}>{wrapperChildren}</Hidden>
        )}
      >
        <FooterContentWrapper ssr={ssr} breakpoint={breakpoint}>
          <FooterHeading>{title}</FooterHeading>
          {children}
        </FooterContentWrapper>
      </ConditionalWrapper>
    </>
  )
}

export default FooterSection
