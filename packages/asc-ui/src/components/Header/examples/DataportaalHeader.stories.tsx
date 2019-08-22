import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled, { css } from '@datapunt/asc-core'
import {
  Header,
  MenuInline,
  MenuToggle,
  SearchBarToggle,
  SearchBar,
  styles,
} from '../../../index'
import { MenuChildren } from '../../Menu/Menu.stories'
import Heading from '../../Heading'
import Typography from '../../Typography'
import { color } from '../../../utils'

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

export interface DataportaalHeaderProps {
  tall: boolean
  fullWidth: boolean
}

// eslint-disable-next-line import/prefer-default-export
export const DataportaalHeader: React.FC<DataportaalHeaderProps> = ({
  tall,
  fullWidth,
}) => (
  <Header
    tall={tall}
    title="Data en informatie"
    homeLink="http://data.amsterdam.nl"
    fullWidth={fullWidth}
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

const DataportaalBodyStyle = styled.div<DataportaalHeaderProps>`
  background-color: ${color('tint', 'level3')};
  position: relative;
  z-index: 1;
`
/* ${({tall}) => {
    
    tall ? css`
  ` : 
  css
  } */

// const HeaderFiller: React.FC<{}> = () => ()
const DataportaalBody: React.FC<DataportaalHeaderProps> = ({
  tall,
  fullWidth,
}) => (
  <DataportaalBodyStyle {...{ tall, fullWidth }}>
    <Heading>Content</Heading>
    <Typography $as="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>
  </DataportaalBodyStyle>
)

storiesOf('Composed/Header', module)
  .addDecorator(storyFn => (
    <div style={{ backgroundColor: 'lightgrey', height: '100%' }}>
      {storyFn()}
    </div>
  ))
  .add('implementation for dataportaal - Frontpage', () => (
    <>
      <DataportaalHeader tall fullWidth={false} />
      <DataportaalBody tall fullWidth={false} />
    </>
  ))
  .add('implementation for dataportaal - Editorial content', () => (
    <>
      <DataportaalHeader tall={false} fullWidth={false} />
      <DataportaalBody tall={false} fullWidth={false} />
    </>
  ))
  .add('implementation for dataportaal - Functional content', () => (
    <>
      <DataportaalHeader tall={false} fullWidth />
      <DataportaalBody tall={false} fullWidth />
    </>
  ))
