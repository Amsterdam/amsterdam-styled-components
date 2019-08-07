import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraph from './Paragraph'

storiesOf('Atoms/Typography/Paragraph', module)
  .add('default style', () => (
    <>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        deleniti dicta doloremque eveniet explicabo id ipsum omnis placeat rerum
        suscipit.
      </Paragraph>
    </>
  ))
  .add('strong style / intro text', () => (
    <>
      <Paragraph strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        deleniti dicta doloremque eveniet explicabo id ipsum omnis placeat rerum
        suscipit.
      </Paragraph>
    </>
  ))
  .add('long text (for editorial posts)', () => (
    <>
      <Paragraph hasLongText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        deleniti dicta doloremque eveniet explicabo id ipsum omnis placeat rerum
        suscipit.
      </Paragraph>
    </>
  ))
