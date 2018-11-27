import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module).add('All buttons', () => (
  <div>
    <Button primary text='Primary default' />
    <hr />
    <Button primary text='Primary arrow right' arrowPos='right' />
    <hr />
    <Button primary text='Primary arrow left' arrowPos='left' />
  </div>
))
