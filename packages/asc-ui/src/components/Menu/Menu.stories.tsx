import React from 'react'
import styled from '@datapunt/asc-core'
import { ChevronRight } from '@datapunt/asc-assets'
import { storiesOf } from '@storybook/react'
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

// eslint-disable-next-line import/prefer-default-export
export const MenuChildren = () => (
  <>
    <MenuItem>
      <MenuButton $as="a" href="/">
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

storiesOf('Composed/Menu', module)
  .add('default', () => (
    <StyledMenuInline>
      <MenuChildren />
    </StyledMenuInline>
  ))
  .add('default with backdrop', () => (
    <StyledMenuInline hasBackDrop>
      <MenuChildren />
    </StyledMenuInline>
  ))
  .add('toggle', () => (
    <MenuToggle>
      <MenuChildren />
    </MenuToggle>
  ))
  .add('toggle with backdrop', () => (
    <MenuToggle hasBackDrop>
      <MenuChildren />
    </MenuToggle>
  ))
