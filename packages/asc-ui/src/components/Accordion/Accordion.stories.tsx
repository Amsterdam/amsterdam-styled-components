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
        <Accordion>Eerste accordion tekst</Accordion>
        <Accordion>Tweede accordion tekst</Accordion>
        <Accordion>
          Accordeon ingeklapt met meer tekst dan dat zichtbaar is in dit
          resolutie en meer tekst dit moet weg gaan in een elipsis
        </Accordion>
      </>
    )
  })
