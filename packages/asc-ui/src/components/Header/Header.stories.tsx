import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'
import Typography from '../Typography'

storiesOf('Composed/Header', module)
  .add('Header short', () => (
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    />
  ))
  .add('Header short, full width', () => (
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth
    />
  ))
  .add('Header tall', () => (
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    />
  ))
  .add('Header tall with header content', () => (
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
      navigation={
        <Typography as="span">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          debitis, dicta incidunt maxime necessitatibus voluptatibus.
        </Typography>
      }
    />
  ))
