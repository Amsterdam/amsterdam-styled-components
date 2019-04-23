import * as React from 'react'
import { storiesOf } from '@storybook/react'
import CenteredElement from '../../internals/CenteredElement/CenteredElement'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import { ThemeProvider } from '../../index'
import Header from './Header'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'
import HeaderTall from './HeaderTall'

const outsideBackgoundColor = '#eee'
const contentBackgrountColor = '#F5F5F5'

const HeaderStory: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <>
      <BoxWrapper backgroundColor={outsideBackgoundColor}>
        <Header
          title="Data en informatie"
          homeLink="http://data.amsterdam.nl"
          search={<CenteredElement> Search </CenteredElement>}
          menu={<CenteredElement> M </CenteredElement>}
        />
      </BoxWrapper>
      <ContentFiller backgroundColor={contentBackgrountColor} />
    </>
  </ThemeProvider>
)

const HeaderTallStory: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <>
      <BoxWrapper backgroundColor={outsideBackgoundColor}>
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
      <BoxWrapper backgroundColor={outsideBackgoundColor}>
        <ContentFiller
          backgroundColor={contentBackgrountColor}
          maxWidth="1800px"
          headerSize="tall"
        />
      </BoxWrapper>
    </>
  </ThemeProvider>
)

storiesOf('Composed/Header', module)
  .add('Header short', () => <HeaderStory />)
  .add('Header tall', () => <HeaderTallStory />)
