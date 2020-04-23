import React from 'react'
import FormTitle from './FormTitle'
import Readme from './README.md'

import Card from '../Card'
import CardContent from '../Card/CardContent'
import Header from '../Header'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import ThemeProvider from '../../theme/ThemeProvider'

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
      markdown: Readme,
    },
  },
}

export const Default = () => (
  <ThemeProvider>
    <FormTitle>This is the title of the FormTitle component</FormTitle>
  </ThemeProvider>
)

export const InContext = () => (
  <ThemeProvider>
    <Header homeLink="" tall />
    <FormTitle>This is the title of the FormTitle component</FormTitle>
    <Card maxWidth={500} backgroundColor="level2" shadow>
      <CardContent>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>To create some context</Paragraph>
      </CardContent>
    </Card>
  </ThemeProvider>
)
