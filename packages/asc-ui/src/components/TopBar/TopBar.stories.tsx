import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Close } from '@datapunt/asc-assets/lib/Icons/Close.svg'
import TopBar from './TopBar'
import Typography from '../Typography'
import IconButton from '../IconButton'
import { ThemeProvider, ascDefaultTheme } from '../../index'

const SimpleComponent: React.FC<{}> = () => (
  <ThemeProvider>
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
  </ThemeProvider>
)

storiesOf('Atoms/TopBar', module).add('default state', () => (
  <SimpleComponent />
))
