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
  Typography,
  Button,
  Divider,
  IconButton,
  TopBar,
} from '../..'
import Link from '../Typography/Link'

const SimpleModal: React.FC<Props> = props => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      {...props}
      onClose={linkTo('Modal', 'closed state')}
    >
      <ListItem>
        <Typography as="p" gutterBottom={8}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Typography>
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
  .add('example of actual usage', () => (
    <Modal
      open
      aria-labelledby="feedback"
      aria-describedby="feedback"
      onClose={action('close modal from escape button or click outside')}
      blurredNode={window.document.querySelector('#root') as HTMLInputElement}
    >
      <TopBar>
        <Typography style={{ flexGrow: 1 }} as="h4">
          Feedback
          <IconButton onClick={action('close modal')}>
            <Close />
          </IconButton>
        </Typography>
      </TopBar>
      <Divider />
      <ListItem>
        <Typography gutterBottom={8} as="h5">
          Onjuiste of ontbrekende gegevens?
        </Typography>
        <Typography as="p" gutterBottom={8}>
          Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat
          het wel moet zijn. We horen het graag.
        </Typography>
        <Button color="primary" onClick={action('click')}>
          Terugmelden
        </Button>
      </ListItem>
      <Divider gutter />
      <ListItem>
        <Typography gutterBottom={8} as="h5">
          Vraag of een klacht?
        </Typography>
        <Typography as="p" gutterBottom={8}>
          Als iets op deze pagina niet goed werkt, onduidelijk is of vragen
          oproept, geef het aan ons door.
        </Typography>
        <Button color="primary" onClick={action('click')}>
          Probleem melden
        </Button>
      </ListItem>
      <Divider transparent />
      <ListItem>
        <Link href="/help">Hulp nodig?</Link>
      </ListItem>
    </Modal>
  ))
  .add('with blurred background', () => (
    <SimpleModal
      open
      blurredNode={window.document.querySelector('#root') as HTMLInputElement}
    />
  ))
  .add('closed state', () => <SimpleModal open={false} />)
