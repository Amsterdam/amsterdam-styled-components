import { ChevronDown } from '@amsterdam/asc-assets'
import type { Theme } from '../../types'
import Hidden from '../Hidden'
import Icon from '../Icon/Icon'
import type { ToggleHandlerProps } from '../Toggle'
import FooterHeading from './FooterHeading'
import {
  FooterContentWrapper,
  StyledButton,
  StyledFooterHeading,
  StyledFooterToggle,
} from './FooterSectionStyle'

interface FooterContentProps {
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

interface ConditionalWrapperProps {
  condition: boolean
  wrapper: (wrapperChildren: JSX.Element) => JSX.Element
  children: JSX.Element
}

function ToggleFooterHeader({ open, onClick, title }: ToggleHandlerProps) {
  return (
    <StyledButton variant="blank" onClick={onClick}>
      <StyledFooterHeading>
        <Icon rotate={open ? 180 : 0} size={20}>
          <ChevronDown />
        </Icon>
        {title && title}
      </StyledFooterHeading>
    </StyledButton>
  )
}

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children)

function FooterSection({
  title,
  ssr,
  toggleAt = 'tabletM',
  showAt,
  hideAt,
  children,
}: FooterContentProps) {
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
