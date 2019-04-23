import * as React from 'react'
import { storiesOf } from '@storybook/react'
import CenteredElement from '../../internals/CenteredElement/CenteredElement'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import { ThemeProvider } from '../../index'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'
import HeaderTall from './HeaderTall'
import Header from './Header'

const HeaderTallStory: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <>
      <BoxWrapper>
        <HeaderTall
          title="Data en informatie"
          homeLink="http://data.amsterdam.nl"
          search={<CenteredElement> Search </CenteredElement>}
          menu={<CenteredElement> M </CenteredElement>}
        />
        <Header
          title="Data en informatie"
          homeLink="http://data.amsterdam.nl"
          search={<CenteredElement> Search </CenteredElement>}
          menu={<CenteredElement> M </CenteredElement>}
          headerSize="tall"
        />
      </BoxWrapper>
      <ContentFiller backgroundColor="#eee" maxWidth="1800px" />
    </>
  </ThemeProvider>
)

storiesOf('Composed/HeaderTall', module).add('default state', () => (
  <HeaderTallStory />
))
