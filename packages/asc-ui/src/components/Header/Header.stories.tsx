import * as React from 'react'
import { storiesOf } from '@storybook/react'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import Header from './Header'

import ContentFiller from '../../internals/ContentFiller/ContentFiller'
import Typography from '../Typography'
import HeaderTallDataportaalStory from './stories/HeaderTallDataportaalStory'

const outsideBackgoundColor = '#E6E6E6'
const contentBackgrountColor = '#ffffff'

const HeaderShortStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth
    />
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
    />
    <ContentFiller backgroundColor={contentBackgrountColor} maxWidth="1800px" />
  </BoxWrapper>
)

const HeaderTallStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    />
    <ContentFiller
      backgroundColor={contentBackgrountColor}
      maxWidth="1800px"
      headerSize="tall"
    />
  </BoxWrapper>
)

const HeaderTallWithContentStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    >
      <Typography element="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis,
        dicta incidunt maxime necessitatibus voluptatibus.
      </Typography>
    </Header>
    <ContentFiller
      backgroundColor={contentBackgrountColor}
      maxWidth="1800px"
      headerSize="tall"
    />
  </BoxWrapper>
)

storiesOf('Composed/Header', module)
  .add('Header short', () => <HeaderShortContentStory />)
  .add('Header short, full width', () => <HeaderShortStory />)
  .add('Header tall', () => <HeaderTallStory />)
  .add('Header tall with header content', () => <HeaderTallWithContentStory />)
  .add('Header tall for dataportaal', () => <HeaderTallDataportaalStory />)
