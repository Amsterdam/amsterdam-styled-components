import React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as ChevronRight } from '@datapunt/asc-assets/lib/Icons/ChevronRight.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import { ReactComponent as ExternalLink } from '@datapunt/asc-assets/lib/Icons/ExternalLink.svg'
import { ReactComponent as MenuIcon } from '@datapunt/asc-assets/lib/Icons/Menu.svg'
import { Menu, MenuItem, MenuLabel, SubMenu } from '../..'

storiesOf('Composed/Menu', module)
  .add('default', () => (
    <Menu label="Menu">
      <MenuItem icon={<ChevronRight />} onClick={() => {}}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={() => {}}>
        Two
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={() => {}}>
        Three
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={() => {}}>
        Four
      </MenuItem>
    </Menu>
  ))
  .add('default with labels', () => (
    <Menu label="Menu">
      <MenuLabel>First two</MenuLabel>
      <MenuItem icon={<ChevronRight />} onClick={() => {}}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={() => {}}>
        Two
      </MenuItem>
      <MenuLabel>Another two</MenuLabel>
      <MenuItem icon={<ChevronRight />} onClick={() => {}}>
        Three
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={() => {}}>
        Four
      </MenuItem>
    </Menu>
  ))
  .add('default mobile', () => (
    <Menu icon={<MenuIcon />} mobile>
      <MenuItem onClick={() => {}}>One</MenuItem>
      <MenuItem onClick={() => {}}>Two</MenuItem>
      <SubMenu label="SubMenu" arrowIcon={<ChevronDown />}>
        <MenuItem icon={<ChevronRight />} onClick={() => {}}>
          One
        </MenuItem>
        <MenuItem icon={<ChevronRight />} onClick={() => {}}>
          Two
        </MenuItem>
        <MenuLabel>Two</MenuLabel>
        <MenuItem icon={<ChevronRight />} onClick={() => {}}>
          One
        </MenuItem>
        <MenuItem icon={<ChevronRight />} onClick={() => {}}>
          Two
        </MenuItem>
        <MenuItem icon={<ExternalLink />} onClick={() => {}}>
          Show more
        </MenuItem>
      </SubMenu>
      <MenuItem onClick={() => {}}>Three</MenuItem>
      <MenuItem onClick={() => {}}>Four</MenuItem>
      <SubMenu label="SubMenu" arrowIcon={<ChevronDown />}>
        <MenuItem icon={<ChevronRight />} onClick={() => {}}>
          One
        </MenuItem>
        <MenuItem icon={<ChevronRight />} onClick={() => {}}>
          Two
        </MenuItem>
      </SubMenu>
    </Menu>
  ))
