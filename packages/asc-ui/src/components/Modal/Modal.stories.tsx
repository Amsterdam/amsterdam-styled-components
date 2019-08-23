import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Close } from '@datapunt/asc-assets'
import { Props } from './Modal'
import { Modal, Button, Divider, TopBar, Paragraph, Heading } from '../..'
import Link from '../Link/Link'
import Icon from '../Icon'

const ModalBlock = styled.div`
  display: block;
  padding: 0 15px;
  margin: 15px 0;
`

const SimpleModal: React.FC<Props> = props => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      {...props}
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

storiesOf('Composed/Modal', module)
  .addDecorator(withKnobs)
  .add('default state', () => <SimpleModal open />)
  .add('backdrop opacity', () => (
    <SimpleModal
      open
      backdropOpacity={number('backdropOpacity', 0.2, {
        range: true,
        min: 0,
        max: 1,
        step: 0.1,
      })}
    />
  ))
  .add('with blurred background', () => (
    <SimpleModal blurredNodeSelector="#root" open />
  ))
  .add('closed state', () => <SimpleModal open={false} />)
  .add('implementation for dataportaal', () => (
    <Modal
      open
      aria-labelledby="feedback"
      aria-describedby="feedback"
      onClose={action('close modal from escape button or click outside')}
    >
      <TopBar>
        <Heading $as="h4" style={{ flexGrow: 1 }}>
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
        <Heading $as="h4">Onjuiste of ontbrekende gegevens?</Heading>
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
        <Heading $as="h4">Vraag of een klacht?</Heading>
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
  ))
