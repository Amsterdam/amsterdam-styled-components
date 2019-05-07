import * as React from 'react'
import { storiesOf } from '@storybook/react'
import CenteredElement from '../../internals/CenteredElement/CenteredElement'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import Header from './Header'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'
import HeaderContent from './HeaderContent'

const outsideBackgoundColor = '#E6E6E6'
const contentBackgrountColor = '#ffffff'

const HeaderShortStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth
    >
      <HeaderContent>
        <HeaderSearch>
          <CenteredElement> Search </CenteredElement>
        </HeaderSearch>
        <HeaderMenu>
          <CenteredElement> M </CenteredElement>
        </HeaderMenu>
      </HeaderContent>
    </Header>
    <ContentFiller backgroundColor={contentBackgrountColor} />
  </BoxWrapper>
)

const HeaderShortContentStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    >
      <HeaderContent>
        <HeaderSearch>
          <CenteredElement> Search </CenteredElement>
        </HeaderSearch>
        <HeaderMenu>
          <CenteredElement> M </CenteredElement>
        </HeaderMenu>
      </HeaderContent>
    </Header>
    <ContentFiller backgroundColor={contentBackgrountColor} maxWidth="1800px" />
  </BoxWrapper>
)

const HeaderTallStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header tall title="Data en informatie" homeLink="http://data.amsterdam.nl">
      <HeaderContent>
        <HeaderSearch>
          <CenteredElement> Search </CenteredElement>
        </HeaderSearch>
        <HeaderMenu>
          <CenteredElement> M </CenteredElement>
        </HeaderMenu>
      </HeaderContent>
    </Header>
    <ContentFiller
      backgroundColor={contentBackgrountColor}
      maxWidth="1800px"
      headerSize="tall"
    />
  </BoxWrapper>
)

storiesOf('Composed/Header', module)
  .add('Header short', () => <HeaderShortStory />)
  .add('Header short with content', () => <HeaderShortContentStory />)
  .add('Header tall', () => <HeaderTallStory />)
