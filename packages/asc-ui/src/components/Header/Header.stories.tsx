import * as React from 'react'
import { storiesOf } from '@storybook/react'
import CenteredElement from '../../internals/CenteredElement/CenteredElement'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import { ThemeProvider } from '../../index'
import Header from './Header'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'

const SimpleComponent: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <>
      <BoxWrapper>
        <Header
          homeLink="http://data.amsterdam.nl"
          search={<CenteredElement> Search </CenteredElement>}
          menu={<CenteredElement> M </CenteredElement>}
        />
      </BoxWrapper>
      <ContentFiller backgroundColor="#eee" />
    </>
  </ThemeProvider>
)

storiesOf('Composed/Header', module).add('default state', () => (
  <SimpleComponent />
))
