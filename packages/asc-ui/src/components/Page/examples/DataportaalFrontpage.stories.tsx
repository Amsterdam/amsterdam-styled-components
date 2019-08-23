import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import {
  DataportaalHeader,
  DataportaalBody,
} from '../../Header/examples/DataportaalHeader.stories'
import { DataportaalFooter } from '../../Footer/Footer.stories'
import { DataportaalCardSpecials } from '../../Card/examples/CardSpecials.stories'
import { DataportaalCardGenericFunctions } from '../../Card/examples/CardGenericFunctions.stories'
import { DataportaalCardArticles } from '../../Card/examples/CardArticles.stories'
import { DataportaalCardAboutData } from '../../Card/examples/CardAboutData.stories'
import { DataportaalImageCard } from '../../ImageCard/ImageCard.stories'
import { Row, Column } from '../../Grid'
import { Heading } from '../../..'
import { breakpoint } from '../../../utils'
import Link from '../../Link'

const DataportaalSubtiltle = styled(Heading)`
  padding-top: 56px;

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    padding-top: 16px;
  }
`

const OverviewLink = styled(Link)`
  margin-top: 32px;
  padding: 8px 3px 8px 0;
`

storiesOf('Composed/Page', module).add('implementation for dataportaal', () => (
  <>
    <DataportaalHeader tall fullWidth={false} />
    <DataportaalBody tall fullWidth={false}>
      <Row>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalSubtiltle>Uitgelicht</DataportaalSubtiltle>
        </Column>
      </Row>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 7, xLarge: 7 }}
        >
          <DataportaalImageCard />
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 5, xLarge: 5 }}
        >
          <DataportaalCardGenericFunctions />
        </Column>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <OverviewLink linkType="with-chevron" href="/">
            Bekijk overzicht
          </OverviewLink>
        </Column>
      </Row>
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalCardSpecials />
        </Column>
      </Row>
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalCardAboutData />
        </Column>
      </Row>
      <Row hasMargin={true}> 
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalCardArticles />
        </Column>
      </Row>
      <DataportaalFooter />
    </DataportaalBody>
  </>
))
