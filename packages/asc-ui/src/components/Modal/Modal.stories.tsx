import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, number } from '@storybook/addon-knobs'
import { Props } from './Modal'
import { ListItem, Modal, Typography } from '../..'

const SimpleModal: React.FC<Props> = props => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      {...props}
      onClose={linkTo('Modal', 'closed state')}
    >
      <ListItem>
        <Typography paragraph element="p" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Typography>
      </ListItem>
    </Modal>
  </div>
)

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default state', () => <SimpleModal open />)
  .add('backdrop opacity', () => (
    <>
      <SimpleModal
        open
        backdropOpacity={number('backdropOpacity', 0.2, {
          range: true,
          min: 0,
          max: 1,
          step: 0.1,
        })}
      />
    </>
  ))
  .add('with blurred background', () => (
    <>
      <SimpleModal
        open
        blurredNode={window.document.querySelector('#root') as HTMLInputElement}
      />
    </>
  ))
  .add('closed state', () => <SimpleModal open={false} />)
