import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonBarStyled, ButtonStyled, Theme } from '@datapunt/asc-core'
import { ReactComponent as BackWhite } from '@datapunt/asc-assets/Icons/back-white.svg'
import Button from './Button'

storiesOf('Button', module).add('All buttons', () => (
  <>
    <ButtonBarStyled>
      <Button color={Theme.TypeLevel.primary} size={ButtonStyled.Size.small}>Versturen</Button>
      <Button color={Theme.TypeLevel.secondary}><BackWhite /> With Button!</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
    </ButtonBarStyled>
    <ButtonBarStyled>
      <Button color={Theme.TypeLevel.primary}>Versturen</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
    </ButtonBarStyled>
    <ButtonBarStyled>
      <Button color={Theme.TypeLevel.primary}>Versturen</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
      <Button color={Theme.TypeLevel.bright}>Weergeven</Button>
    </ButtonBarStyled>
  </>
))
