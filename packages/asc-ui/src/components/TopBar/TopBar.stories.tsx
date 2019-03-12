import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Close } from '@datapunt/asc-assets/lib/Icons/Close.svg'
import TopBar from './TopBar'
import Typography from '../Typography'
import IconButton from '../IconButton'

const SimpleComponent: React.FC<{}> = () => (
  <TopBar>
    <Typography style={{ flexGrow: 1 }} element="h4">
      Lorem ipsum
    </Typography>
    <IconButton aria-label="Close">
      <Close />
    </IconButton>
  </TopBar>
)

storiesOf('TopBar', module).add('default state', () => <SimpleComponent />)
