import React from 'react'
import { storiesOf } from '@storybook/react'
import { DataportaalHeader } from '../../Header/examples/DataportaalHeader.stories'
import { DataportaalFooter } from '../../Footer/Footer.stories'
import Row from '../Row'
import { Column } from '..'
import { DataportaalCardSpecials } from '../../Card/examples/CardSpecials.stories'
import { DataportaalCardGenericFunctions } from '../../Card/examples/CardGenericFunctions.stories'
import { DataportaalCardArticles } from '../../Card/examples/CardArticles.stories'
import { DataportaalCardAboutData } from '../../Card/examples/CardAboutData.stories'
import { DataportaalImageCard } from '../../ImageCard/ImageCard.stories'

storiesOf('Composed/Frontpage', module).add(
  'implementation for dataportaal',
  () => (
    <>
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalHeader tall fullWidth />
        </Column>
      </Row>
      <Row hasMargin={false}>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 7, xLarge: 7 }}
        >
          <DataportaalImageCard />
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 5, xLarge: 5 }}
          // push={{ small: 0, medium: 0, big: 0, large: 7, xLarge: 7 }}
        >
          <DataportaalCardGenericFunctions />
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
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalCardArticles />
        </Column>
      </Row>
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalFooter />
        </Column>
      </Row>
    </>
  ),
)
