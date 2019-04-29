import * as React from 'react'
import { storiesOf } from '@storybook/react'
import CenteredElement from '../../internals/CenteredElement/CenteredElement'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import { ThemeProvider } from '../../index'
import HeaderShort from './HeaderShort'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'
import HeaderTall from './HeaderTall'

const outsideBackgoundColor = '#E6E6E6'
const contentBackgrountColor = '#ffffff'

const HeaderShortStory: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <>
      <BoxWrapper backgroundColor={outsideBackgoundColor}>
        <HeaderShort
          title="Data en informatie"
          homeLink="http://data.amsterdam.nl"
          search={<CenteredElement> Search </CenteredElement>}
          menu={<CenteredElement> M </CenteredElement>}
          headerSize="short"
        />
        <ContentFiller backgroundColor={contentBackgrountColor} />
      </BoxWrapper>
    </>
  </ThemeProvider>
)

const HeaderShortContentStory: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <>
      <BoxWrapper backgroundColor={outsideBackgoundColor}>
        <HeaderShort
          title="Data en informatie"
          homeLink="http://data.amsterdam.nl"
          search={<CenteredElement> Search </CenteredElement>}
          menu={<CenteredElement> M </CenteredElement>}
          headerSize="short-content"
        />
        <ContentFiller
          backgroundColor={contentBackgrountColor}
          maxWidth="1800px"
        />
      </BoxWrapper>
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
        <HeaderShort
          title="Data en informatie"
          homeLink="http://data.amsterdam.nl"
          search={<CenteredElement> Search </CenteredElement>}
          menu={<CenteredElement> M </CenteredElement>}
          headerSize="tall"
        />
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
  .add('Header short', () => <HeaderShortStory />)
  .add('Header short with content', () => <HeaderShortContentStory />)
  .add('Header tall', () => <HeaderTallStory />)
