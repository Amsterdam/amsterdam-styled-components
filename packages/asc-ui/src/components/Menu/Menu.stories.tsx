import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu, MenuItem, SubMenu } from '../..'

storiesOf('Composed/Menu', module).add('default', () => (
  <Menu label="Menu">
    <MenuItem role="button" onClick={() => {}}>
      One
    </MenuItem>
    <MenuItem role="button" onClick={() => {}}>
      Two
    </MenuItem>
    <SubMenu label="Menu">
      <MenuItem role="button" onClick={() => {}}>
        One
      </MenuItem>
      <MenuItem role="button" onClick={() => {}}>
        Two
      </MenuItem>
    </SubMenu>
  </Menu>
))
