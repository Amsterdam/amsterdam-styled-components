import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ChevronRight } from '@datapunt/asc-assets'
import { ChevronDown } from '@datapunt/asc-assets'
import { ExternalLink } from '@datapunt/asc-assets'
import { Menu as MenuIcon } from '@datapunt/asc-assets'
import { Menu, MenuItem, MenuLabel, SubMenu } from '../..'

storiesOf('Composed/Menu', module)
  .add('default', () => (
    <Menu>
      <MenuItem onClick={action('click')}>One</MenuItem>
      <MenuItem onClick={action('click')}>Two</MenuItem>
      <MenuItem onClick={action('click')}>Three</MenuItem>
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
      <MenuItem onClick={action('click')}>Three</MenuItem>
    </Menu>
  ))
  .add('default mobile', () => (
    <Menu icon={<MenuIcon />} mobile>
      <MenuItem onClick={action('click')}>One</MenuItem>
      <SubMenu arrowIcon={<ChevronDown />} label="Two">
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
