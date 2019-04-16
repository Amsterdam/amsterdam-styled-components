import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '../../index'
import Header from './Header'

const SimpleComponent: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <React.Fragment>
      <Header />
    </React.Fragment>
  </ThemeProvider>
)

storiesOf('Composed/Header', module).add('default state', () => (
  <SimpleComponent />
))
