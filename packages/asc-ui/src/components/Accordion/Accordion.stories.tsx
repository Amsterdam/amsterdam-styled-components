import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Accordion from './Accordion'

storiesOf('Atoms/Accordion', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
  ))
  .add('default', () => {
    return (
      <>
        <Accordion key={1}>Eerste accordion tekst</Accordion>
        <Accordion key={2}>Tweede accordion tekst</Accordion>
        <Accordion key={3}>
          Accordeon ingeklapt met meer tekst dan dat zichtbaar is in dit
          resolutie en meer tekst dit moet weg gaan in een elipsis
        </Accordion>
      </>
    )
  })
