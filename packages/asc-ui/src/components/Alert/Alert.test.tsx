import { fireEvent, render } from '@testing-library/react'
import Alert from './Alert'

describe('Alert', () => {
  it('should render', () => {
    const { container } = render(<Alert>Foo</Alert>)
    expect(container.firstChild).toBeDefined()
  })

  it('should call onDismiss when user clicks on close button', () => {
    const onDismissMock = jest.fn()

    const { getByTitle } = render(
      <Alert dismissible onDismiss={onDismissMock}>
        Foo
      </Alert>,
    )

    expect(onDismissMock).not.toHaveBeenCalled()

    fireEvent.click(getByTitle('Sluiten'))

    expect(onDismissMock).toHaveBeenCalled()
  })
})
