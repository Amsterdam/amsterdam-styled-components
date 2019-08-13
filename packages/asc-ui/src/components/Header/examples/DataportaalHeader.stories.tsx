import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { css } from '@datapunt/asc-core'
import {
  Header,
  MenuInline,
  MenuToggle,
  SearchBarToggle,
  SearchBar,
  styles,
} from '../../../index'
import { MenuChildren } from '../../Menu/Menu.stories'

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
`

// Re-used from the Menu story. Go to the Menu story to see how it's implemented
const MenuDefault = (props: any) => (
  <MenuInline {...props}>
    <MenuChildren />
  </MenuInline>
)

const MenuMobile = (props: any) => (
  <MenuToggle {...props} align="right">
    <MenuChildren />
  </MenuToggle>
)

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
          align="left"
          hideAt="tabletM"
          placeholder="Enter the search text"
          onChange={() => {
            action(`text changed`)
          }}
          onSubmit={() => {
            action(`button clicked`)
          }}
        />
        <MenuDefault showAt="tabletM" />
        <MenuMobile hideAt="tabletM" />
      </>
    }
  />
)

storiesOf('Composed/Header', module).add(
  'implementation for dataportaal',
  () => <DataportaalHeader />,
)
