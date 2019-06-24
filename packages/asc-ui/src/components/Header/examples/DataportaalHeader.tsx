import React from 'react'
import { action } from '@storybook/addon-actions'
import { css } from '@datapunt/asc-core'
import { Header, styles } from '../../../index'
import { breakpoint } from '../../../utils'
import SearchBar from '../../SearchBar'
import SearchBarToggle from '../../SearchBarToggle/SearchBarToggle'
import MenuInline from '../../NewMenu/MenuInline'
import MenuToggle from '../../NewMenu/MenuToggle'
import MenuItem from '../../NewMenu/MenuItem'
import MenuFlyOut from '../../NewMenu/MenuFlyOut'

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

  ${styles.MenuInlineStyle} {
    @media screen and ${breakpoint('max-width', 'tabletM')} {
      display: none;
    }
  }

  ${styles.MenuToggleStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      display: none;
    }
  }
`

const menuChildren = (
  <>
    <MenuFlyOut label="Categorieën">
      <MenuItem
        title="Kaart"
      >
        Kaart
      </MenuItem>
      <MenuItem
        title="Panoramabeelden"
      >
        Panoramabeelden
      </MenuItem>
      <MenuItem
        title="Datasets"
      >
        Datasets
      </MenuItem>
      <MenuItem
        title="Data services"
      >
        Data services
      </MenuItem>
    </MenuFlyOut>
    <MenuFlyOut label="Over">
      <MenuItem
        title="Privacy en informatiebeveiliging"
      >
        Privacy en informatiebeveiliging
      </MenuItem>
      <MenuItem
        title="Beschikbaarheid en kwaliteit data"
      >
        Beschikbaarheid en kwaliteit data
      </MenuItem>
      <MenuItem
        title="Technisch beheer en werkwijze"
      >
        Technisch beheer en werkwijze
      </MenuItem>
      <MenuItem
        title="Contact"
        href="mailto:datapunt@amsterdam.nl"
      >
        Contact
      </MenuItem>
    </MenuFlyOut>
    <MenuItem onClick={() => action('Show feedback form')}>Feedback</MenuItem>
    <MenuItem href="/help">Help</MenuItem>
    <MenuFlyOut label="Jon Doe">
      <MenuItem onClick={() => action('Log out')}>Uitloggen</MenuItem>
    </MenuFlyOut>
  </>
)

const MenuDefault = () => (
  <MenuInline>
{menuChildren}
    </MenuInline>
)

const MenuMobile = () => (
  <MenuToggle align="right">
{menuChildren}
    </MenuToggle>
)
//
// const HeaderLinksMenu = () => (
//   <Menu>
//     <MenuItem href="#one" onClick={action('click')}>
//       One
//     </MenuItem>
//     <MenuItem href="#two" onClick={action('click')}>
//       Two
//     </MenuItem>
//   </Menu>
// )

const DataportaalHeader: React.FC<{}> = () => (
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
      css={DataportaalHeaderWrapperStyle}
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
