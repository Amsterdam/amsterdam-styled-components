import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonBarStyled, Theme } from '@amsterdam/asc-core'
import Button from './Button'
import ThemeProvider from '../../ThemeProvider'

storiesOf('Button', module).add('All buttons', () => (
  <ThemeProvider>
    <>
      <ButtonBarStyled>
        <Button text="Default" color={Theme.TypeLevel.primary} />
        <Button color={Theme.TypeLevel.primary} text="Default primary" />
        <Button color={Theme.TypeLevel.secondary} text="Default secondary" />
      </ButtonBarStyled>
      <ButtonBarStyled>
        <Button text="Arrow right" color={Theme.TypeLevel.primary} />
        <Button color={Theme.TypeLevel.primary} text="Arrow right primary" />
        <Button color={Theme.TypeLevel.secondary} text="Arrow right secondary" />
      </ButtonBarStyled>
      <ButtonBarStyled>
        <Button text="Arrow left" color={Theme.TypeLevel.primary} />
        <Button color={Theme.TypeLevel.primary} text="Arrow left primary" />
        <Button color={Theme.TypeLevel.secondary} text="Arrow left secondary" />
      </ButtonBarStyled>
    </>
  </ThemeProvider>
))
