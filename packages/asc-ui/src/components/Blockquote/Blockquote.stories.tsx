import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Blockquote from './Blockquote'

storiesOf('Atoms/Typography/Blockquote', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default style', () => (
    <Blockquote>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti
      dicta doloremque eveniet explicabo id ipsum omnis placeat rerum suscipit.
    </Blockquote>
  ))
