import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuInline from './MenuInline/MenuInline'
import MenuToggle from './MenuToggle'
import MenuItem from './MenuItem'
import MenuFlyOut from './MenuFlyOut'
import MenuTitle from './MenuItemTitle'

storiesOf('Composed/Menu', module)
  .add('default', () => (
    <MenuInline>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/">Shop</MenuItem>
      <MenuFlyOut label="Submenu!">
        <MenuItem href="/">Space Bear 6</MenuItem>
        <MenuItem href="/">Space Bear 6 Plus</MenuItem>
        <MenuTitle>Just a menu title</MenuTitle>
        <MenuItem href="/">Space Bear 7</MenuItem>
      </MenuFlyOut>
      <MenuItem href="/">Mars Cars</MenuItem>
      <MenuItem href="/">Contact</MenuItem>
      <MenuFlyOut label="Another one!">
        <MenuItem href="/">Space Bear 6</MenuItem>
        <MenuItem href="/">Space Bear 6 Plus</MenuItem>
        <MenuTitle>Just a menu title</MenuTitle>
        <MenuItem href="/">Space Bear 7</MenuItem>
      </MenuFlyOut>
    </MenuInline>
  ))
  .add('toggle', () => (
    <MenuToggle>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/">Shop</MenuItem>
      <MenuFlyOut label="Submenu!">
        <MenuItem href="/">Space Bear 6</MenuItem>
        <MenuItem href="/">Space Bear 6 Plus</MenuItem>
        <MenuTitle>Just a menu title</MenuTitle>
        <MenuItem href="/">Space Bear 7</MenuItem>
      </MenuFlyOut>
      <MenuItem href="/">Mars Cars</MenuItem>
      <MenuItem href="/">Contact</MenuItem>
      <MenuFlyOut label="Another one!">
        <MenuItem href="/">Space Bear 6</MenuItem>
        <MenuItem href="/">Space Bear 6 Plus</MenuItem>
        <MenuTitle>Just a menu title</MenuTitle>
        <MenuItem href="/">Space Bear 7</MenuItem>
      </MenuFlyOut>
    </MenuToggle>
  ))
