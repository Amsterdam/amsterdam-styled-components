import React from 'react'
import {
  ChevronDown,
  Print,
  Email,
  Linkedin,
  FacebookPadded,
  Ellipsis,
  Twitter,
} from '@datapunt/asc-assets'
import { ContextMenu, ContextMenuItem, Icon } from '../..'
import ContextMenuSelect from './ContextMenuSelect'

export default {
  title: 'Experimental/Composed/ContextMenu',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
}

export const Default = () => (
  <ContextMenu arrowIcon={<ChevronDown />}>
    <ContextMenuItem>One</ContextMenuItem>
    <ContextMenuItem>Two</ContextMenuItem>
  </ContextMenu>
)

export const PositionBottom = () => (
  <ContextMenu arrowIcon={<ChevronDown />} position="bottom">
    <ContextMenuItem>One</ContextMenuItem>
    <ContextMenuItem>Two</ContextMenuItem>
  </ContextMenu>
)

export const WithLabel = () => (
  <ContextMenu arrowIcon={<ChevronDown />} label="I'm a label!">
    <ContextMenuItem>One</ContextMenuItem>
    <ContextMenuItem>Two</ContextMenuItem>
  </ContextMenu>
)

export const WithSelectOnTouchScreen = () => (
  <ContextMenu
    arrowIcon={<Ellipsis />}
    selectElementForTouchScreen={
      <>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label style={{ display: 'none' }} htmlFor="some-id">
          Open menu
        </label>
        <ContextMenuSelect
          name="context-menu"
          id="some-id"
          onChange={(e) => alert(e.currentTarget.value)}
        >
          <option value="one">One</option>
          <option value="two">Two</option>
        </ContextMenuSelect>
      </>
    }
  >
    <ContextMenuItem>One</ContextMenuItem>
    <ContextMenuItem>Two</ContextMenuItem>
  </ContextMenu>
)

export const ImplementationForDataportaal = () => (
  <ContextMenu
    arrowIcon={<ChevronDown />}
    icon={
      <Icon padding={4} inline size={24}>
        <Ellipsis />
      </Icon>
    }
  >
    <ContextMenuItem
      divider
      onClick={() => {
        window.print()
      }}
      icon={
        <Icon padding={4} inline size={24}>
          <Print />
        </Icon>
      }
    >
      Printen
    </ContextMenuItem>
    <ContextMenuItem
      onClick={() => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=` +
            `${window.location.href}&title=${window.document.title}`,
          '_blank',
        )
      }}
      icon={
        <Icon inline size={24}>
          <FacebookPadded />
        </Icon>
      }
    >
      Deel via Facebook
    </ContextMenuItem>
    <ContextMenuItem
      onClick={() =>
        window.open(
          `https://twitter.com/intent/tweet?url=${window.location.href}` +
            `&text=${window.document.title}`,
          '_blank',
        )
      }
      icon={
        <Icon inline size={24} padding={4}>
          <Twitter />
        </Icon>
      }
    >
      Deel via Twitter
    </ContextMenuItem>
    <ContextMenuItem
      onClick={() =>
        window.open(
          `
          https://www.linkedin.com/shareArticle?url=${window.location.href}` +
            `&mini=true&title=${window.document.title}`,
          '_blank',
        )
      }
      icon={
        <Icon inline size={24} padding={4}>
          <Linkedin />
        </Icon>
      }
    >
      Deel via Linkedin
    </ContextMenuItem>
    <ContextMenuItem
      onClick={() => window.open(`mailto:mail@mail.com`, '_blank')}
      icon={
        <Icon inline size={24} padding={4}>
          <Email />
        </Icon>
      }
    >
      Deel via E-mail
    </ContextMenuItem>
  </ContextMenu>
)
