import { Modal, Paragraph } from '@amsterdam/asc-ui'
import { number, withKnobs } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'
import styled from 'styled-components'

const ModalBlock = styled.div`
  display: block;
  padding: 0 15px;
  margin: 15px 0;
`

export default {
  title: 'UI/Modal',
  decorators: [withKnobs],
}

export const DefaultState = () => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      open
      onClose={linkTo('Modal', 'closed state')}
    >
      <ModalBlock>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Paragraph>
      </ModalBlock>
    </Modal>
  </div>
)

export const BackdropOpacity = () => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      open
      backdropOpacity={number('backdropOpacity', 0.2, {
        range: true,
        min: 0,
        max: 1,
        step: 0.1,
      })}
      onClose={linkTo('Modal', 'closed state')}
    >
      <ModalBlock>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Paragraph>
      </ModalBlock>
    </Modal>
  </div>
)

export const WithBlurredBackground = () => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      blurredNodeSelector="#root"
      open
      onClose={linkTo('Modal', 'closed state')}
    >
      <ModalBlock>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Paragraph>
      </ModalBlock>
    </Modal>
  </div>
)

export const ClosedState = () => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      open={false}
      onClose={linkTo('Modal', 'closed state')}
    >
      <ModalBlock>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Paragraph>
      </ModalBlock>
    </Modal>
  </div>
)
