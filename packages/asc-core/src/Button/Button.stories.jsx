import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'
import ButtonBar from '../ButtonBar/ButtonBar'

storiesOf('Button', module).add('All buttons', () => (
  <div>
    <ButtonBar>
      <Button text='Default' />
      <Button color='primary' text='Default primary' />
      <Button color='secondary' text='Default secondary' />
    </ButtonBar>
    <ButtonBar>
      <Button arrowPos='right' text='Arrow right' />
      <Button color='primary' arrowPos='right' text='Arrow right primary' />
      <Button color='secondary' arrowPos='right' text='Arrow right secondary' />
    </ButtonBar>
    <ButtonBar>
      <Button arrowPos='left' text='Arrow left' />
      <Button color='primary' arrowPos='right' text='Arrow left primary' />
      <Button color='secondary' arrowPos='right' text='Arrow left secondary' />
    </ButtonBar>
  </div>
))
