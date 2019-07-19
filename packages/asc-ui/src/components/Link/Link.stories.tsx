import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Link from './Link'

storiesOf('Atoms/Typography/Link', module).add('default style', () => (
  <>
    <Link href="#">I am a link!</Link>
  </>
))
