import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ReactComponent as Close } from '@datapunt/asc-assets/lib/Icons/Close.svg'
import { Props } from './Modal'
import {
  ListItemStyle,
  Modal,
  Typography,
  Button,
  DividerStyle,
  IconButton,
  TopBar,
  ascDefaultTheme,
} from '../..'

const SimpleModal: React.FC<Props> = props => (
  <div>
    Lorem ipsum dolor.
    <Modal
      aria-labelledby="modal"
      {...props}
      onClose={linkTo('Modal', 'closed state')}
    >
      <ListItemStyle>
        <Typography paragraph element="p" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Typography>
      </ListItemStyle>
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
      <TopBar backgroundColor={ascDefaultTheme.colors.tint.level3}>
        <Typography style={{ flexGrow: 1 }} element="h4">
          Feedback
          <IconButton onClick={action('close modal')}>
            <Close />
          </IconButton>
        </Typography>
      </TopBar>
      <DividerStyle />
      <ListItemStyle>
        <Typography gutterBottom element="h5">
          Onjuiste of ontbrekende gegevens?
        </Typography>
        <Typography paragraph element="p" gutterBottom>
          Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat
          het wel moet zijn. We horen het graag.
        </Typography>
        <Button color="primary" onClick={action('click')}>
          Terugmelden
        </Button>
      </ListItemStyle>
      <DividerStyle gutter />
      <ListItemStyle>
        <Typography gutterBottom element="h5">
          Vraag of een klacht?
        </Typography>
        <Typography paragraph element="p" gutterBottom>
          Als iets op deze pagina niet goed werkt, onduidelijk is of vragen
          oproept, geef het aan ons door.
        </Typography>
        <Button color="primary" onClick={action('click')}>
          Probleem melden
        </Button>
      </ListItemStyle>
      <DividerStyle transparent />
      <ListItemStyle>
        <Typography element="a" href="#">
          Hulp nodig?
        </Typography>
      </ListItemStyle>
    </Modal>
  ))
  .add('with blurred background', () => (
    <SimpleModal
      open
      blurredNode={window.document.querySelector('#root') as HTMLInputElement}
    />
  ))
  .add('closed state', () => <SimpleModal open={false} />)
