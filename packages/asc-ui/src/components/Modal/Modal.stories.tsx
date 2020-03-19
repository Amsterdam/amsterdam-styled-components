import * as React from 'react'
import styled from '@datapunt/asc-core'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Close } from '@datapunt/asc-assets'
import { Modal, Button, Divider, TopBar, Paragraph, Heading } from '../..'
import Link from '../Link/Link'
import Icon from '../Icon'

const ModalBlock = styled.div`
  display: block;
  padding: 0 15px;
  margin: 15px 0;
`

export default {
  title: 'Experimental/Composed/Modal',
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

export const ImplementationForDataportaal = () => (
  <Modal
    open
    aria-labelledby="feedback"
    aria-describedby="feedback"
    onClose={action('close modal from escape button or click outside')}
  >
    <TopBar>
      <Heading forwardedAs="h4" style={{ flexGrow: 1 }}>
        Feedback
        <Button
          type="button"
          size={30}
          onClick={action('close modal')}
          variant="blank"
        >
          <Icon size={20}>
            <Close />
          </Icon>
        </Button>
      </Heading>
    </TopBar>
    <Divider />
    <ModalBlock>
      <Heading forwardedAs="h4">Onjuiste of ontbrekende gegevens?</Heading>
      <Paragraph>
        Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat
        het wel moet zijn. We horen het graag.
      </Paragraph>
      <Button variant="primary" onClick={action('click')}>
        Terugmelden
      </Button>
    </ModalBlock>
    <Divider gutter />
    <ModalBlock>
      <Heading forwardedAs="h4">Vraag of een klacht?</Heading>
      <Paragraph>
        Als iets op deze pagina niet goed werkt, onduidelijk is of vragen
        oproept, geef het aan ons door.
      </Paragraph>
      <Button variant="primary" onClick={action('click')}>
        Probleem melden
      </Button>
    </ModalBlock>
    <Divider transparent />
    <ModalBlock>
      <Link href="/help" variant="inline">
        Hulp nodig?
      </Link>
    </ModalBlock>
  </Modal>
)
