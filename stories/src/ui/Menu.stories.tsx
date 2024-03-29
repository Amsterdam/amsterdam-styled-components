import { ChevronRight } from '@amsterdam/asc-assets'
import {
  MenuButton,
  MenuFlyOut,
  MenuInline,
  MenuItem,
  MenuItemTitle,
  MenuToggle,
  themeColor,
} from '@amsterdam/asc-ui'
import styled from 'styled-components'
import type { Meta } from '@storybook/react'

function ReactRouterLink({ children, reactRouterProp, ...otherProps }: any) {
  return (
    <a {...otherProps} data-attr={reactRouterProp}>
      {children}
    </a>
  )
}

function StyledReactRouterLink({ children, ...otherProps }: any) {
  return (
    <MenuButton forwardedAs={ReactRouterLink} {...otherProps}>
      {children}
    </MenuButton>
  )
}

const StyledMenuInline = styled(MenuInline)`
  background-color: ${themeColor('tint', 'level2')};
`

export default {
  title: 'UI/Menu',

  decorators: [
    (StoryComponent) => (
      <div style={{ padding: '40px 10px' }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta

function MenuChildren() {
  return (
    <>
      <MenuItem>
        <MenuButton forwardedAs="a" href="/" active>
          Home
        </MenuButton>
      </MenuItem>
      <MenuItem>
        <StyledReactRouterLink
          reactRouterProp="hello!"
          forwardedAs="a"
          href="/"
        >
          Shop
        </StyledReactRouterLink>
      </MenuItem>
      <MenuFlyOut label="Submenu!">
        <MenuItem>
          <MenuButton forwardedAs="a" href="/" iconLeft={<ChevronRight />}>
            Space Bear 6
          </MenuButton>
        </MenuItem>
        <MenuItem>
          <MenuButton forwardedAs="a" href="/" iconLeft={<ChevronRight />}>
            Space Bear 6 Plus
          </MenuButton>
        </MenuItem>
        <MenuItemTitle>Just a menu title</MenuItemTitle>
        <MenuItem>
          <MenuButton
            onClick={() => {
              // eslint-disable-next-line no-undef,no-alert
              alert('Hello!')
            }}
            iconLeft={<ChevronRight />}
          >
            This triggers an alert!
          </MenuButton>
        </MenuItem>
      </MenuFlyOut>
      <MenuFlyOut label="Submenu!">
        <MenuItem>
          <MenuButton forwardedAs="a" href="/" iconLeft={<ChevronRight />}>
            Space Bear 6
          </MenuButton>
        </MenuItem>
        <MenuItem>
          <MenuButton forwardedAs="a" href="/" iconLeft={<ChevronRight />}>
            Space Bear 6 Plus
          </MenuButton>
        </MenuItem>
        <MenuItemTitle>Just a menu title</MenuItemTitle>
        <MenuItem>
          <MenuButton
            onClick={() => {
              // eslint-disable-next-line no-undef,no-alert
              alert('Hello!')
            }}
            iconLeft={<ChevronRight />}
          >
            This triggers an alert!
          </MenuButton>
        </MenuItem>
      </MenuFlyOut>
      <MenuItem>
        <MenuButton forwardedAs="a" href="/">
          Contact
        </MenuButton>
      </MenuItem>
    </>
  )
}
export function DefaultState() {
  return (
    <StyledMenuInline>
      <MenuChildren />
    </StyledMenuInline>
  )
}
export function DefaultWithBackdrop() {
  return (
    <StyledMenuInline hasBackDrop>
      <MenuChildren />
    </StyledMenuInline>
  )
}
export function Toggle() {
  return (
    <MenuToggle>
      <MenuChildren />
    </MenuToggle>
  )
}
export function ToggleWithBackdrop() {
  return (
    <MenuToggle hasBackDrop>
      <MenuChildren />
    </MenuToggle>
  )
}
