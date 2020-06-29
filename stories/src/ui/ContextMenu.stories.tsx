import React from 'react'
import { ChevronDown, Ellipsis } from '@datapunt/asc-assets'
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuSelect,
} from '@datapunt/asc-ui'

export default {
  title: 'UI/ContextMenu',
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
