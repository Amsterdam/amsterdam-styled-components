import { fireEvent, render } from '@testing-library/react'
import Accordion from './Accordion'

jest.mock('polished')

describe('Accordion', () => {
  it('should render', () => {
    const { container } = render(
      <Accordion title="Foo" id="foo">
        Foo
      </Accordion>,
    )
    expect(container.firstChild).toBeDefined()
  })

  it('should call onToggle when user clicks opens the accordion', () => {
    const onOpenMock = jest.fn()

    const { getByTitle } = render(
      <Accordion title="Foo" id="foo" onToggle={onOpenMock}>
        Foo
      </Accordion>,
    )

    expect(onOpenMock).not.toHaveBeenCalled()

    fireEvent.click(getByTitle('Foo'))

    expect(onOpenMock).toHaveBeenCalledWith(true)
  })
})
