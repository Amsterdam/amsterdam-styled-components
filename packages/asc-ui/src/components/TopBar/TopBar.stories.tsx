import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Close } from '@datapunt/asc-assets'
import TopBar from './TopBar'
import Typography from '../Typography'
import IconButton from '../IconButton'

const backgroundColor = '#E6E6E6'

const TopBarComponent: React.FC<{}> = () => (
  <>
    <TopBar>
      <Typography style={{ flexGrow: 1 }} element="h4">
        TopBar
        <IconButton aria-label="Close" onClick={action('close')}>
          <Close />
        </IconButton>
      </Typography>
    </TopBar>
  </>
)

const TopBarWithBackgoundComponent: React.FC<{}> = () => (
  <>
    <TopBar backgroundColor={backgroundColor}>
      <Typography style={{ flexGrow: 1 }} element="h4">
        TopBar - with backgroundColor property set
        <IconButton aria-label="Close" onClick={action('close')}>
          <Close />
        </IconButton>
      </Typography>
    </TopBar>
  </>
)

storiesOf('Atoms/TopBar', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => <TopBarComponent />)
  .add('with background color', () => <TopBarWithBackgoundComponent />)
