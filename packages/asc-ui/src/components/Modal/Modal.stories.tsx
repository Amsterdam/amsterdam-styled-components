import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Close } from '@datapunt/asc-assets'
import { Props } from './Modal'
import {
  ListItem,
  Modal,
  Button,
  Divider,
  IconButton,
  TopBar,
  Paragraph,
  Heading,
} from '../..'
import Link from '../Link/Link'

const SimpleModal: React.FC<Props> = props => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      {...props}
      onClose={linkTo('Modal', 'closed state')}
    >
      <ListItem>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Paragraph>
      </ListItem>
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
        <Heading style={{ flexGrow: 1 }} as="h4">
          Feedback
          <IconButton onClick={action('close modal')}>
            <Close />
          </IconButton>
        </Heading>
      </TopBar>
      <Divider />
      <ListItem>
        <Heading as="h4">Onjuiste of ontbrekende gegevens?</Heading>
        <Paragraph>
          Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat
          het wel moet zijn. We horen het graag.
        </Paragraph>
        <Button color="primary" onClick={action('click')}>
          Terugmelden
        </Button>
      </ListItem>
      <Divider gutter />
      <ListItem>
        <Heading as="h4">Vraag of een klacht?</Heading>
        <Paragraph>
          Als iets op deze pagina niet goed werkt, onduidelijk is of vragen
          oproept, geef het aan ons door.
        </Paragraph>
        <Button color="primary" onClick={action('click')}>
          Probleem melden
        </Button>
      </ListItem>
      <Divider transparent />
      <ListItem>
        <Link href="/help" linkType="inline">
          Hulp nodig?
        </Link>
      </ListItem>
    </Modal>
  ))
