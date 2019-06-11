import React from 'react'
import { action } from '@storybook/addon-actions'
import { css } from '@datapunt/asc-core'
import { ReactComponent as ChevronRight } from '@datapunt/asc-assets/lib/Icons/ChevronRight.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import { ReactComponent as ExternalLink } from '@datapunt/asc-assets/lib/Icons/ExternalLink.svg'
import { ReactComponent as MenuIcon } from '@datapunt/asc-assets/lib/Icons/Menu.svg'
import { MenuItem, MenuLabel, Header, SubMenu, styles } from '../../../index'
import Menu, { Props } from '../../Menu/Menu'
import { breakpoint } from '../../../utils'
import SearchBar from '../../SearchBar'
import SearchBarToggle from '../../SearchBarToggle/SearchBarToggle'

const DataportaalHeaderWrapperStyle = css`
  ${styles.HeaderContentStyle} {
    justify-content: flex-end;
  }

  ${styles.HeaderNavigationStyle} > ${styles.SearchBarStyle} {
    flex-grow: 1;

    ${styles.TextFieldStyle} {
      flex-grow: 0;
      width: 100%;
      max-width: 430px;
    }
  }

  ${styles.MenuBarStyle} {
    @media screen and ${breakpoint('max-width', 'tabletM')} {
      display: none;
    }
  }

  ${styles.MenuDropDownStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      display: none;
    }
  }
`

const MenuDefault = (props: Props) => (
  <Menu {...props}>
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
    <SubMenu arrowIcon={<ChevronDown />} label="Three">
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
    </SubMenu>
    <MenuItem onClick={action('click')}>Four</MenuItem>
  </Menu>
)

const MenuMobile = () => <MenuDefault mobile icon={<MenuIcon />} />

const HeaderLinksMenu = () => (
  <Menu>
    <MenuItem icon={<ChevronRight />} onClick={action('click')}>
      One
    </MenuItem>
    <MenuItem icon={<ChevronRight />} onClick={action('click')}>
      Two
    </MenuItem>
  </Menu>
)

const DataportaalHeader: React.FC<{}> = () => (
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
      css={DataportaalHeaderWrapperStyle}
      links={<HeaderLinksMenu />}
      navigation={
        <>
          <SearchBar
            showAt="tabletM"
            placeholder="Enter the search text"
            onChange={() => {
              action(`text changed`)
            }}
            onSubmit={() => {
              action(`button clicked`)
            }}
          />
          <SearchBarToggle
            hideAt="tabletM"
            placeholder="Enter the search text"
            onChange={() => {
              action(`text changed`)
            }}
            onSubmit={() => {
              action(`button clicked`)
            }}
          />
          <MenuDefault />
          <MenuMobile />
        </>
      }
    />
)

export default DataportaalHeader
