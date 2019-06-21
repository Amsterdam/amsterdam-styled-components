import React from 'react'
import { action } from '@storybook/addon-actions'
import { css } from '@datapunt/asc-core'
import { Header, styles } from '../../../index'
import { breakpoint } from '../../../utils'
import SearchBar from '../../SearchBar'
import SearchBarToggle from '../../SearchBarToggle/SearchBarToggle'
import Menu from '../../NewMenu/Menu'
import MenuItem from '../../NewMenu/MenuItem'
import MenuItemLink from '../../NewMenu/MenuItemLink'
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

  // ${styles.MenuSt} {
  //   @media screen and ${breakpoint('max-width', 'tabletM')} {
  //     display: none;
  //   }
  // }

  ${styles.MenuFlyOutStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      display: none;
    }
  }
`

const MenuDefault = (props: any) => (
  <Menu {...props}>
    <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
    <MenuFlyOut label="Two">
      <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
      <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
      <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
      <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
    </MenuFlyOut>
    <MenuFlyOut label="Three">
      <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
      <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
      <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
    </MenuFlyOut>
    <MenuItem><MenuItemLink>One</MenuItemLink></MenuItem>
  </Menu>
)

const MenuMobile = () => (
  <MenuDefault toggle />
)
//
// const HeaderLinksMenu = () => (
//   <Menu>
//     <MenuItem icon={<ChevronRight />} href="#one" onClick={action('click')}>
//       One
//     </MenuItem>
//     <MenuItem icon={<ChevronRight />} href="#two" onClick={action('click')}>
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
