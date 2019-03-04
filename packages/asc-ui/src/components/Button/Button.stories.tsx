import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AscCore, Theme } from '@datapunt/asc-core'
import { ReactComponent as BackWhite } from '@datapunt/asc-assets/Icons/back-white.svg'
import Button from './Button'

storiesOf('Button', module).add('All buttons', () => (
  <>
    <AscCore.ButtonBar>
      <Button color={Theme.TypeLevel.primary} size={AscCore.Button.ButtonSize.small}>Versturen</Button>
      <Button color={Theme.TypeLevel.secondary}>
        <BackWhite />
        {' '}
With Button!
      </Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
    </AscCore.ButtonBar>
    <AscCore.ButtonBar>
      <Button color={Theme.TypeLevel.primary}>Versturen</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
    </AscCore.ButtonBar>
    <AscCore.ButtonBar>
      <Button color={Theme.TypeLevel.primary}>Versturen</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
    </AscCore.ButtonBar>
  </>
))
