import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonBarStyled, Theme } from '@amsterdam/asc-core'
import Button from './Button'
import ThemeProvider from '../../ThemeProvider'

storiesOf('Button', module).add('All buttons', () => (
  <ThemeProvider>
    <>
      <ButtonBarStyled>
        <Button text="Default" color={Theme.Color.primary} />
        <Button color={Theme.Color.primary} text="Default primary" />
        <Button color={Theme.Color.secondary} text="Default secondary" />
      </ButtonBarStyled>
      <ButtonBarStyled>
        <Button text="Arrow right" color={Theme.Color.primary} />
        <Button color={Theme.Color.primary} text="Arrow right primary" />
        <Button color={Theme.Color.secondary} text="Arrow right secondary" />
      </ButtonBarStyled>
      <ButtonBarStyled>
        <Button text="Arrow left" color={Theme.Color.primary} />
        <Button color={Theme.Color.primary} text="Arrow left primary" />
        <Button color={Theme.Color.secondary} text="Arrow left secondary" />
      </ButtonBarStyled>
    </>
  </ThemeProvider>
))
