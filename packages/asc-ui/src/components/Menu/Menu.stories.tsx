import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ReactComponent as ChevronRight } from '@datapunt/asc-assets/lib/Icons/ChevronRight.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import { ReactComponent as ExternalLink } from '@datapunt/asc-assets/lib/Icons/ExternalLink.svg'
import { ReactComponent as MenuIcon } from '@datapunt/asc-assets/lib/Icons/Menu.svg'
import { Menu, MenuItem, MenuLabel, SubMenu } from '../..'
import HeaderNavigation from '../Header/HeaderNavigation'

storiesOf('Composed/Menu', module)
  .add('default', () => (
    <Menu>
      <MenuItem onClick={action('click')}>One</MenuItem>
      <MenuItem onClick={action('click')}>Two</MenuItem>
      <MenuItem onClick={action('click')}>Three</MenuItem>
    </Menu>
  ))
  .add('default with dropdown', () => (
    <HeaderNavigation>
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
        <MenuItem onClick={action('click')}>Four</MenuItem>
      </Menu>
    </HeaderNavigation>
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
