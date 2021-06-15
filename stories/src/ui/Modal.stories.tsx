import { useState } from 'react'
import { Modal, Paragraph, Button, Input } from '@amsterdam/asc-ui'
import { number, withKnobs } from '@storybook/addon-knobs'
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

export const DefaultState = () => {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal aria-labelledby="modal" open={open} onClose={() => setOpen(false)}>
        <ModalBlock>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, quisquam!
          </Paragraph>
          <Input />
        </ModalBlock>
      </Modal>
    </div>
  )
}

export const BackdropOpacity = () => {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        aria-labelledby="modal"
        open={open}
        backdropOpacity={number('backdropOpacity', 0.2, {
          range: true,
          min: 0,
          max: 1,
          step: 0.1,
        })}
        onClose={() => setOpen(false)}
      >
        <ModalBlock>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, quisquam!
          </Paragraph>
          <Input />
        </ModalBlock>
      </Modal>
    </div>
  )
}

export const WithBlurredBackground = () => {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        aria-labelledby="modal"
        blurredNodeSelector="#root"
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalBlock>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, quisquam!
          </Paragraph>
          <Input />
        </ModalBlock>
      </Modal>
    </div>
  )
}

export const ClosedState = () => (
  <div>
    Lorem ipsum dolor.
    <Modal aria-labelledby="modal" open={false}>
      <ModalBlock>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Paragraph>
      </ModalBlock>
    </Modal>
  </div>
)
