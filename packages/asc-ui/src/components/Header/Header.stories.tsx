import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '../../index'
import Header from './Header'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'

const SimpleComponent: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <React.Fragment>
      <Header />
      <ContentFiller />
    </React.Fragment>
  </ThemeProvider>
)

storiesOf('Composed/Header', module).add('default state', () => (
  <SimpleComponent />
))
