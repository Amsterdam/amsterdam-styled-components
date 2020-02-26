import React from 'react'
import styled from '@datapunt/asc-core'
import { ChevronRight } from '@datapunt/asc-assets'
import {
  MenuFlyOut,
  MenuItem,
  MenuButton,
  MenuItemTitle,
  MenuInline,
  MenuToggle,
  themeColor,
} from '../../index'

const ReactRouterLink: React.FC<any> = ({
  children,
  reactRouterProp,
  ...otherProps
}) => (
  <a {...otherProps} data-attr={reactRouterProp}>
    {children}
  </a>
)

const StyledReactRouterLink: React.FC<any> = ({ children, ...otherProps }) => (
  <MenuButton $as={ReactRouterLink} {...otherProps}>
    {children}
  </MenuButton>
)

const StyledMenuInline = styled(MenuInline)`
  background-color: ${themeColor('tint', 'level2')};
`

export default {
  title: 'Composed/Menu',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const MenuChildren = () => (
  <>
    <MenuItem>
      <MenuButton $as="a" href="/" active>
        Home
      </MenuButton>
    </MenuItem>
    <MenuItem>
      <StyledReactRouterLink reactRouterProp="hello!" $as="a" href="/">
        Shop
      </StyledReactRouterLink>
    </MenuItem>
    <MenuFlyOut label="Submenu!">
      <MenuItem>
        <MenuButton $as="a" href="/" iconLeft={<ChevronRight />}>
          Space Bear 6
        </MenuButton>
      </MenuItem>
      <MenuItem>
        <MenuButton $as="a" href="/" iconLeft={<ChevronRight />}>
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
        <MenuButton $as="a" href="/" iconLeft={<ChevronRight />}>
          Space Bear 6
        </MenuButton>
      </MenuItem>
      <MenuItem>
        <MenuButton $as="a" href="/" iconLeft={<ChevronRight />}>
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
      <MenuButton $as="a" href="/">
        Contact
      </MenuButton>
    </MenuItem>
  </>
)
export const DefaultState = () => (
  <StyledMenuInline>
    <MenuChildren />
  </StyledMenuInline>
)
export const DefaultWithBackdrop = () => (
  <StyledMenuInline hasBackDrop>
    <MenuChildren />
  </StyledMenuInline>
)
export const Toggle = () => (
  <MenuToggle>
    <MenuChildren />
  </MenuToggle>
)
export const ToggleWithBackdrop = () => (
  <MenuToggle hasBackDrop>
    <MenuChildren />
  </MenuToggle>
)
