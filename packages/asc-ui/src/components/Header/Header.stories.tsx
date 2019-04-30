import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import CenteredElement from '../../internals/CenteredElement/CenteredElement'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import { ThemeProvider } from '../../index'
import HeaderShort from './HeaderShort'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'
import HeaderTall from './HeaderTall'
import MenuBar from '../MenuBar'
import { MenuBarItem } from '../MenuBar/MenuBar'

const outsideBackgoundColor = '#E6E6E6'
const contentBackgrountColor = '#ffffff'

const menu = (
  <MenuBar>
    {/* <MenuBarItem component={<CenteredElement> Onderdelen </CenteredElement>} /> */}
    <MenuBarItem label="Inhoud" onClick={action('click')} />
    <MenuBarItem label="Over" onClick={action('click')} />
    <MenuBarItem label="Feedback" onClick={action('click')} />
    <MenuBarItem label="Help" onClick={action('click')} />
    <MenuBarItem label="a.tudorache" onClick={action('click')} />
  </MenuBar>
)

const HeaderShortStory: React.FC<{}> = () => (
  <ThemeProvider themeName="default">
    <>
      <BoxWrapper backgroundColor={outsideBackgoundColor}>
        <HeaderShort
          title="Data en informatie"
          homeLink="http://data.amsterdam.nl"
          search={<CenteredElement> Search </CenteredElement>}
          // menu={<CenteredElement> M </CenteredElement>}
          menu={menu}
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
