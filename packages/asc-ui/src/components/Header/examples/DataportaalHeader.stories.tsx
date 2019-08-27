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
import { PageLayoutInterface } from '../../shared/types'
import { Row, Column } from '../../Grid'
import BodyFiller from './BodyFiller.stories'
import Body from '../../Body'

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

export const DataportaalBody: React.FC<PageLayoutInterface> = ({
  tall,
  fullWidth,
  children,
}) => <Body {...{ tall, fullWidth }}>{children}</Body>

storiesOf('Composed/Header', module)
  .addDecorator(storyFn => (
    <div
      style={{
        backgroundColor: 'lightgrey',
        height: '100%',
        position: 'relative',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('implementation for dataportaal - Frontpage', () => (
    <div>
      <DataportaalHeader tall fullWidth={false} />
      <DataportaalBody tall fullWidth={false}>
        <BodyFiller />
      </DataportaalBody>
    </div>
  ))
  .add('implementation for dataportaal - Editorial content', () => (
    <>
      <DataportaalHeader tall={false} fullWidth={false} />
      <DataportaalBody tall={false} fullWidth={false}>
        <Row>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
          >
            <BodyFiller />
          </Column>
        </Row>
      </DataportaalBody>
    </>
  ))
  .add('implementation for dataportaal - Functional content', () => (
    <>
      <DataportaalHeader tall={false} fullWidth />
      <DataportaalBody tall={false} fullWidth>
        <BodyFiller />
      </DataportaalBody>
    </>
  ))
