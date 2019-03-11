import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Close } from '@datapunt/asc-assets/lib/Icons/Close.svg'
import TopBar from '../TopBar'
import Typography from '../Typography'
import Modal from './Modal'
import IconButton from '../IconButton'
import { Divider, ListItem, Button } from '../..'

class SimpleModal extends React.Component {
  state = {
    open: true,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state

    return (
      <>
        <button type="button" onClick={this.handleOpen}>
          Open modal
        </button>
        <Modal
          blurredNode={
            window.document.querySelector('#root') as HTMLInputElement
          }
          aria-labelledby="modal"
          open={open}
          onClose={this.handleClose}
        >
          <TopBar>
            <Typography style={{ flexGrow: 1 }} element="h4">
              Feedback
            </Typography>
            <IconButton aria-label="Close" onClick={this.handleClose}>
              <Close />
            </IconButton>
          </TopBar>
          <Divider />
          <ListItem>
            <Typography gutterBottom element="h5">
              Feedback
            </Typography>
            <Typography paragraph element="p" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto, quisquam!
            </Typography>
            <Button color="primary">Lorem ipsum.</Button>
          </ListItem>
        </Modal>
      </>
    )
  }
}

storiesOf('Modal', module).add('default state', () => (
  <>
    <SimpleModal />
  </>
))
