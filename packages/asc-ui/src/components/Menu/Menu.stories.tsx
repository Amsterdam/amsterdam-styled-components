import React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as ExternalLink } from '@datapunt/asc-assets/lib/Icons/ExternalLink.svg'
import { Menu, MenuItem, MenuLabel, SubMenu } from '../..'

storiesOf('Composed/Menu', module)
  .add('default', () => (
    <Menu label="Menu">
      <MenuItem onClick={() => {}}>One</MenuItem>
      <MenuItem onClick={() => {}}>Two</MenuItem>
      <MenuItem onClick={() => {}}>Three</MenuItem>
      <MenuItem onClick={() => {}}>Four</MenuItem>
    </Menu>
  ))
  .add('default with labels', () => (
    <Menu label="Menu">
      <MenuLabel>First two</MenuLabel>
      <MenuItem onClick={() => {}}>One</MenuItem>
      <MenuItem onClick={() => {}}>Two</MenuItem>
      <MenuLabel>Another two</MenuLabel>
      <MenuItem onClick={() => {}}>Three</MenuItem>
      <MenuItem onClick={() => {}}>Four</MenuItem>
    </Menu>
  ))
  .add('default mobile', () => (
    <Menu label="Menu" mobile>
      <MenuItem onClick={() => {}}>One</MenuItem>
      <MenuItem onClick={() => {}}>Two</MenuItem>
      <SubMenu label="SubMenu">
        <MenuItem onClick={() => {}}>One</MenuItem>
        <MenuItem onClick={() => {}}>Two</MenuItem>
        <MenuLabel>Two</MenuLabel>
        <MenuItem onClick={() => {}}>One</MenuItem>
        <MenuItem onClick={() => {}}>Two</MenuItem>
        <MenuItem icon={<ExternalLink />} onClick={() => {}}>
          Show more
        </MenuItem>
      </SubMenu>
      <MenuItem onClick={() => {}}>Three</MenuItem>
      <MenuItem onClick={() => {}}>Four</MenuItem>
    </Menu>
  ))
