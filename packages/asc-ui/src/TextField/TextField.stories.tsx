import * as React from 'react'
import { storiesOf } from '@storybook/react'

import TextField from './TextField'

// storiesOf('TextField', module).add('default state', () => <TextField />)
storiesOf('TextField', module).add('error state', () => <TextField error />)
