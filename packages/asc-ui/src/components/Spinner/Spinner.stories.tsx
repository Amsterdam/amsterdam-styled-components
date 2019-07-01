import React from 'react'
import { storiesOf } from '@storybook/react'
import Spinner from './Spinner'

storiesOf('Composed/Spinner', module)
  .add('default (20px)', () => <Spinner />)
  .add('with maximal size (100px)', () => <Spinner size={100} />)
  .add('with theme color', () => <Spinner color="secondary" size={100} />)
