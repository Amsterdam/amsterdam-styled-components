import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { DataportaalHeader } from '../../Header/examples/DataportaalHeader.stories'
import { DataportaalFooter } from '../../Footer/Footer.stories'
import { DataportaalCardSpecials } from '../../Card/examples/CardSpecials.stories'
import { DataportaalCardGenericFunctions } from '../../Card/examples/CardGenericFunctions.stories'
import { DataportaalCardArticles } from '../../Card/examples/CardArticles.stories'
import { DataportaalCardAboutData } from '../../Card/examples/CardAboutData.stories'
import { DataportaalImageCard } from '../../ImageCard/ImageCard.stories'
import { Row, Column } from '../../Grid'
import { Heading, styles } from '../../..'
import { breakpoint, color } from '../../../utils'
import Link from '../../Link'

const DaraportaalFrontpage = styled.div`
  & > ${styles.RowStyle} {
    background-color: ${color('tint', 'level1')};
  }
`

const DataportaalSubtiltle = styled(Heading)`
  padding-top: 56px;

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    padding-top: 16px;
  }
`

const OverviewLink = styled(Link)`
  margin-top: 32px;
  padding: 8px 3px 8px 0;

  @media screen and ${breakpoint('max-width', 'tabletM')} {
    margin-top: 12px;
  }
`

const StyledDataportaalFooter = styled(DataportaalFooter)`
  margin-top: 16px;

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    margin-top: 24px;
  }
`

const StickyRow = styled(Row)`
  position: sticky;
  top: 0;
  z-index: 2;

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    box-shadow: none;
    position: relative;
  }
`

const StyledColumn = styled(Column)`
  display: block;
  height: 100%;
`

storiesOf('Composed/Page', module)
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
  .addDecorator(withKnobs)
  .add('implementation for dataportaal', () => (
    <DaraportaalFrontpage>
      <StickyRow hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalHeader tall fullWidth={false} />
        </Column>
      </StickyRow>
      <Row>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalSubtiltle>Uitgelicht</DataportaalSubtiltle>
        </Column>
      </Row>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 8, xLarge: 8 }}
        >
          <DataportaalImageCard loading={boolean('loading', false)} />
        </Column>
        <Column
          span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
          order={{ large: 3, xLarge: 3 }}
        >
          <OverviewLink linkType="with-chevron" href="/">
            Bekijk overzicht
          </OverviewLink>
        </Column>
        <StyledColumn
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 4, xLarge: 4 }}
        >
          <DataportaalCardGenericFunctions
            loading={boolean('loading', false)}
          />
        </StyledColumn>
      </Row>
      <Row>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalCardSpecials loading={boolean('loading', false)} />
        </Column>
      </Row>
      <Row>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalCardArticles loading={boolean('loading', false)} />
        </Column>
      </Row>
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalCardAboutData loading={boolean('loading', false)} />
        </Column>
      </Row>
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <StyledDataportaalFooter />
        </Column>
      </Row>
    </DaraportaalFrontpage>
  ))
