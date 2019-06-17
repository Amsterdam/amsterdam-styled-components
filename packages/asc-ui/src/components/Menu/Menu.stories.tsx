import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ChevronRight, ExternalLink } from '@datapunt/asc-assets'
import { Menu, MenuItem, MenuLabel, SubMenu } from '../..'

storiesOf('Composed/Menu', module)
  .add('default', () => (
    <Menu>
      <MenuItem href="#one" onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem href="#two" onClick={action('click')}>
        Two
      </MenuItem>
      <MenuItem href="#three" onClick={action('click')}>
        Three
      </MenuItem>
    </Menu>
  ))
  .add('default with dropdown', () => (
    <Menu>
      <MenuItem onClick={action('click')}>One</MenuItem>
      <SubMenu label="Two">
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          One
        </MenuItem>
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          Two
        </MenuItem>
        <MenuLabel>Two</MenuLabel>
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          One
        </MenuItem>
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          Two
        </MenuItem>
        <MenuItem icon={<ExternalLink />} onClick={action('click')}>
          Show more
        </MenuItem>
      </SubMenu>
      <SubMenu label="Three">
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          One
        </MenuItem>
      </SubMenu>
      <MenuItem onClick={action('click')}>Four</MenuItem>
    </Menu>
  ))
  .add('default mobile', () => (
    <Menu mobile>
      <MenuItem onClick={action('click')}>One</MenuItem>
      <SubMenu label="Two">
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          One
        </MenuItem>
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          Two
        </MenuItem>
        <MenuLabel>Two</MenuLabel>
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          One
        </MenuItem>
        <MenuItem icon={<ChevronRight />} onClick={action('click')}>
          Two
        </MenuItem>
        <MenuItem icon={<ExternalLink />} onClick={action('click')}>
          Show more
        </MenuItem>
      </SubMenu>
      <MenuItem onClick={action('click')}>Three</MenuItem>
    </Menu>
  ))
