import { useState } from 'react'
import { fireEvent, render } from '@testing-library/react'
import Modal from './Modal'

jest.mock('polished')

function ButtonAndModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)} disablePortal>
        <input />
      </Modal>
    </>
  )
}

describe('Modal', () => {
  it('should render when open prop is true', () => {
    const { container } = render(
      // portal is disabled because react testing library has issues handling it
      <Modal open disablePortal />,
    )
    expect(container.lastChild).toBeTruthy()
  })

  it('should render null when open prop is false', () => {
    const { container } = render(<Modal open={false} disablePortal />)
    expect(container.lastChild).toBeNull()
  })

  it('should set focus on first focusable element', () => {
    const { queryByText } = render(
      <Modal open>
        <button type="button">First</button>
        <button type="button">Second</button>
      </Modal>,
    )
    expect(queryByText(/First/)).toHaveFocus()
  })

  it('should call onClose when user clicks on backdrop', () => {
    const onCloseMock = jest.fn()

    const { container } = render(
      <Modal open onClose={onCloseMock} disablePortal />,
    )

    expect(onCloseMock).not.toHaveBeenCalled()

    const firstChild = container.firstChild as HTMLElement
    fireEvent.click(firstChild)

    expect(onCloseMock).toHaveBeenCalled()
  })

  it('should call onClose when user clicks escape key', () => {
    const onCloseMock = jest.fn()

    const { container } = render(
      <Modal open onClose={onCloseMock} disablePortal />,
    )

    expect(onCloseMock).not.toHaveBeenCalled()

    const lastChild = container.lastChild as HTMLElement
    fireEvent.keyDown(lastChild, { key: 'Escape', code: 'Escape' })

    expect(onCloseMock).toHaveBeenCalled()
  })

  it('should return focus to previously focused element when modal closes', () => {
    const { container } = render(<ButtonAndModal />)

    const button = container.firstChild as HTMLElement
    button.focus()
    fireEvent.click(button) // open modal

    const modal = container.lastChild as HTMLElement
    fireEvent.keyDown(modal, { key: 'Escape', code: 'Escape' }) // close modal

    expect(button).toHaveFocus()
  })
})
