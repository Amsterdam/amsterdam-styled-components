import React from 'react'
import FormTitle from './FormTitle'

import Card from '../Card'
import CardContent from '../Card/CardContent'
import Header from '../Header'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

export default {
  title: 'Experimental/Atoms/FormTitle',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          padding: '0px 10px',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],

  parameters: {
    notes: {
      markdown:
        '#### See component in <a href="https://designsystem.amsterdam.nl/7awj1hc9f/p/537bb7-title-component" target="_blank">Design system</a>',
    },
  },
}

export const Default = () => (
  <FormTitle>This is the title of the FormTitle component</FormTitle>
)

export const InContext = () => (
  <>
    <Header tall />
    <FormTitle>This is the title of the FormTitle component</FormTitle>
    <Card maxWidth={500} backgroundColor="level2" shadow>
      <CardContent>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>To create some context</Paragraph>
      </CardContent>
    </Card>
  </>
)
