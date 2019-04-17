import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '../../index'
import Header from './Header'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'

const SimpleComponent: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <>
      <Header />
      <ContentFiller backgroundColor="#eee" />
    </>
  </ThemeProvider>
)

storiesOf('Composed/Header', module).add('default state', () => (
  <SimpleComponent />
))
