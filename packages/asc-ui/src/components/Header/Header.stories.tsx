import * as React from 'react'
import { storiesOf } from '@storybook/react'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import Header from './Header'

import ContentFiller from '../../internals/ContentFiller/ContentFiller'
import Typography from '../Typography'
import HeaderTallDataportaalStory from './stories/HeaderTallDataportaalStory'

const contentBackgrountColor = '#ffffff'

const HeaderShortStory: React.FC<{}> = () => (
  <>
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth
    />
    <ContentFiller backgroundColor={contentBackgrountColor} />
  </>
)

const HeaderShortContentStory: React.FC<{}> = () => (
  <>
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    />
    <ContentFiller backgroundColor={contentBackgrountColor} maxWidth="1800px" />
  </>
)

const HeaderTallStory: React.FC<{}> = () => (
  <>
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
  </>
)

const HeaderTallWithContentStory: React.FC<{}> = () => (
  <>
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
      navigation={
        <Typography element="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          debitis, dicta incidunt maxime necessitatibus voluptatibus.
        </Typography>
      }
    />
    <ContentFiller
      backgroundColor={contentBackgrountColor}
      maxWidth="1800px"
      headerSize="tall"
    />
  </>
)

storiesOf('Composed/Header', module)
  .addDecorator(storyFn => (
    <BoxWrapper backgroundColor="#E6E6E6">{storyFn()}</BoxWrapper>
  ))
  .add('Header short', () => <HeaderShortContentStory />)
  .add('Header short, full width', () => <HeaderShortStory />)
  .add('Header tall', () => <HeaderTallStory />)
  .add('Header tall with header content', () => <HeaderTallWithContentStory />)
  .add('Header tall for dataportaal', () => <HeaderTallDataportaalStory />)
