import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import Label from './Label'

type Props = {
  id: string
  orientation?: 'top'
  label?: string
  small?: boolean
}

type State = {}

class Selection extends React.Component<Props, State> {
  state = {
    open: false,
  }

  onOpenClose = (override?: boolean) => {
    const { open } = this.state
    this.setState({
      open: override || !open,
    })
  }

  render() {
    const { id, label, children, orientation }: any = this.props
    const { open } = this.state
    return (
      <AscCore.Select.Wrapper.default>
        <Label
          {...{
            open,
            id,
            label,
          }}
          onOpenClose={this.onOpenClose}
        />
        <AscCore.Select.ListBox.default
          labelId={id}
          orientation={orientation}
          aria-hidden={!open}
          aria-activedescendant="listbox1-1"
        >
          {children}
        </AscCore.Select.ListBox.default>
      </AscCore.Select.Wrapper.default>
    )
  }
}

export default Selection
