import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Close } from '@datapunt/asc-assets'
import TopBar from './TopBar'
import Typography from '../Typography'
import IconButton from '../IconButton'
import { ascDefaultTheme } from '../../index'

const SimpleComponent: React.FC<{}> = () => (
  <>
    <TopBar>
      <Typography style={{ flexGrow: 1 }} element="h4">
        TopBar - with default theme color
      </Typography>
      <IconButton aria-label="Close">
        <Close />
      </IconButton>
    </TopBar>

    <TopBar backgroundColor={`${ascDefaultTheme.colors.tint.level3}`}>
      <Typography style={{ flexGrow: 1 }} element="h4">
        TopBar - with backgroundColor property set
      </Typography>
      <IconButton aria-label="Close">
        <Close />
      </IconButton>
    </TopBar>
  </>
)

storiesOf('Atoms/TopBar', module).add('default state', () => (
  <SimpleComponent />
))
