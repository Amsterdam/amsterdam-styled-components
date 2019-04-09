import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ReactComponent as Close } from '@datapunt/asc-assets/lib/Icons/Close.svg'
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
        <Typography style={{ flexGrow: 1 }} element="h4">
          Feedback
          <IconButton onClick={action('close modal')}>
            <Close />
          </IconButton>
        </Typography>
      </TopBar>
      <Divider />
      <ListItem>
        <Typography gutterBottom element="h5">
          Onjuiste of ontbrekende gegevens?
        </Typography>
        <Typography paragraph element="p" gutterBottom>
          Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat
          het wel moet zijn. We horen het graag.
        </Typography>
        <Button as="a" color="primary" onClick={action('click')}>
          Terugmelden
        </Button>
      </ListItem>
      <Divider gutter />
      <ListItem>
        <Typography gutterBottom element="h5">
          Vraag of een klacht?
        </Typography>
        <Typography paragraph element="p" gutterBottom>
          Als iets op deze pagina niet goed werkt, onduidelijk is of vragen
          oproept, geef het aan ons door.
        </Typography>
        <Button as="a" color="primary" onClick={action('click')}>
          Probleem melden
        </Button>
      </ListItem>
      <Divider transparent />
      <ListItem>
        <Typography element="a" href="#">
          Hulp nodig?
        </Typography>
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
