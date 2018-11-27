import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'
import ButtonBar from '../ButtonBar/ButtonBar'

storiesOf('Button', module).add('All buttons', () => (
  <div>
    <ButtonBar>
      <Button text='Default' />
      <Button primary text='Default primary' />
    </ButtonBar>
    <ButtonBar>
      <Button arrowPos='right' text='Arrow right' />
      <Button primary arrowPos='right' text='Arrow right primary' />
    </ButtonBar>
    <ButtonBar>
      <Button arrowPos='left' text='Arrow left' />
      <Button primary arrowPos='right' text='Arrow left primary' />
    </ButtonBar>
  </div>
))
