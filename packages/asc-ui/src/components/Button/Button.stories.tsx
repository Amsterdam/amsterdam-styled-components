import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Alert } from '@datapunt/asc-assets/Icons/Alert.svg'
import { ButtonBar, Button } from '../..'

storiesOf('Button', module).add('All buttons', () => (
  <>
    <ButtonBar>
      <Button color="primary">Versturen</Button>
      <Button color="secondary">
        <Alert />
        With Button!
      </Button>
      <Button color="bright">Weergeven</Button>
    </ButtonBar>
    <ButtonBar>
      <Button color="primary">Versturen</Button>
      <Button color="bright">Weergeven</Button>
      <Button color="bright">Weergeven</Button>
    </ButtonBar>
    <ButtonBar>
      <Button color="primary">Versturen</Button>
      <Button color="bright">Weergeven</Button>
      <Button color="bright">Weergeven</Button>
    </ButtonBar>
  </>
))
