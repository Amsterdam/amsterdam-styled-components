import React from 'react'
import { storiesOf } from '@storybook/react'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import Header from './Header'
import Typography from '../Typography'
import DataportaalHeader from './examples/DataportaalHeader'

storiesOf('Composed/Header', module)
  .addDecorator(storyFn => (
    <BoxWrapper backgroundColor="#E6E6E6">{storyFn()}</BoxWrapper>
  ))
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
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          debitis, dicta incidunt maxime necessitatibus voluptatibus.
        </Typography>
      }
    />
  ))
  .add('Header implementation for dataportaal', () => <DataportaalHeader />)
