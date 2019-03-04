import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as BackWhite } from '@datapunt/asc-assets/Icons/back-white.svg'
import { DividerStyled as Divider, ListItemStyled } from '@datapunt/asc-core'
import Modal from './Modal'
import TopBar from '../TopBar'
import Typography from '../Typography'
import IconButton from '../IconButton/IconButton'
import { Theme } from '../../index'
import { Button } from '../index'

class SimpleModal extends React.Component {
  state = {
    open: false,
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
        <button type="button" onClick={this.handleOpen}>Open modal</button>
        <Modal aria-labelledby="hioea" open={open} onClose={this.handleClose}>
          <TopBar>
            <Typography element="h5">
              Feedback
              <IconButton
                color={Theme.TypeLevel.secondary}
                onClick={this.handleClose}
              >
                <BackWhite />
              </IconButton>
            </Typography>
          </TopBar>

          <ListItemStyled>
            <Typography element="h6">Feedback</Typography>
            <Typography element="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto, quisquam!
            </Typography>
            <Button>Aanmelden</Button>
          </ListItemStyled>
          <Divider gutter />
          <ListItemStyled>
            <Typography element="h6">Feedback</Typography>
            <Typography element="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto, quisquam!
            </Typography>
            <Button>Aanmelden</Button>
          </ListItemStyled>
          <Button as="a" href="/">Hello</Button>
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
