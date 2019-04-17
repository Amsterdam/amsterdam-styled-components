import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu, MenuItem, SubMenu } from '../..'

storiesOf('Composed/Menu', module).add('default', () => (
  <Menu label="Menu">
    <MenuItem onClick={() => {}}>
      One
    </MenuItem>
    <MenuItem onClick={() => {}}>
      Two
    </MenuItem>
    <SubMenu label="SubMenu">
      <MenuItem onClick={() => {}}>
        One
      </MenuItem>
      <MenuItem onClick={() => {}}>
        Two
      </MenuItem>
    </SubMenu>
    <MenuItem onClick={() => {}}>
      Three
    </MenuItem>
    <MenuItem onClick={() => {}}>
      Four
    </MenuItem>
  </Menu>
))
