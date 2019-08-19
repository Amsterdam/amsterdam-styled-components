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

storiesOf('Composed/Frontpage', module).add(
  'implementation for dataportaal',
  () => (
    <>
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
          <DataportaalHeader />
        </Column>
      </Row>
      <Row hasMargin={false}>
        <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
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
