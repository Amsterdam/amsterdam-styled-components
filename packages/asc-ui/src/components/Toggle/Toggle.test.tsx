import { render, fireEvent } from '@testing-library/react'
import Toggle from './Toggle'
import { KeyboardKeys } from '../../types'

describe('Toggle', () => {
  let container: any
  let queryByTestId: any
  let button: HTMLButtonElement
  const onClickMock = jest.fn()
  beforeEach(() => {
    ;({ container, queryByTestId } = render(
      <Toggle onClick={onClickMock} render={false}>
        <div data-testid="child">Foo</div>
      </Toggle>,
    ))
    button = container.querySelector('button')
  })

  it('should render the toggle button', () => {
    expect(container.querySelector('button')).toBeDefined()
  })

  it('should display the children when the button is clicked', () => {
    expect(queryByTestId('child')).toBeNull()
    fireEvent.click(button)
    expect(queryByTestId('child')).toBeDefined()
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should not render the children when user presses the escape key after opening it', () => {
    const escape = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      preventDefault: () => {},
      key: KeyboardKeys.Escape,
    }

    fireEvent.click(button)
    expect(queryByTestId('child')).toBeDefined()
    fireEvent.keyDown(button, escape)
    expect(queryByTestId('child')).toBeNull()
  })

  it('should call the passed parent function when the button is clicked', () => {
    const onOpenMock = jest.fn()
    ;({ container } = render(
      <Toggle onClick={jest.fn()} onOpen={onOpenMock} render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    ))

    fireEvent.click(container.querySelector('button'))
    expect(onOpenMock).toHaveBeenCalledWith(true)
  })

  it('should display the children when the parent passes an open prop', () => {
    ;({ container } = render(
      <Toggle onClick={jest.fn()} open render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    ))

    expect(queryByTestId('child')).toBeDefined()
  })
})
