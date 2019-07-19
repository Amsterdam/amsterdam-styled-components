import styled from '@datapunt/asc-core'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Close } from '@datapunt/asc-assets'
import TopBar from './TopBar'
import IconButton from '../IconButton'
import Heading from '../Heading'

const backgroundColor = '#E6E6E6'

const HeadingStyled = styled(Heading)`
  flex-grow: 1;
`

const TopBarComponent: React.FC<{}> = () => (
  <>
    <TopBar>
      <HeadingStyled as="h4">
        TopBar
        <IconButton aria-label="Close" onClick={action('close')}>
          <Close />
        </IconButton>
      </HeadingStyled>
    </TopBar>
  </>
)

const TopBarWithBackgoundComponent: React.FC<{}> = () => (
  <>
    <TopBar backgroundColor={backgroundColor}>
      <HeadingStyled as="h4">
        TopBar - with backgroundColor property set
        <IconButton aria-label="Close" onClick={action('close')}>
          <Close />
        </IconButton>
      </HeadingStyled>
    </TopBar>
  </>
)

storiesOf('Atoms/TopBar', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => <TopBarComponent />)
  .add('with background color', () => <TopBarWithBackgoundComponent />)
