import { fireEvent, render } from '@testing-library/react'
import { Tab, Tabs } from '.'

describe('Tabs', () => {
  const consoleOutput: string[] = []
  // eslint-disable-next-line no-console
  const originalWarning = console.warn
  const mockedWarn = (output: string) => consoleOutput.push(output)
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.warn = mockedWarn
  })
  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = originalWarning
  })
  it('should render the labels and contents of the tabs', () => {
    const { container } = render(
      <Tabs label="An example of tabs">
        <Tab id="one" label="First">
          Contents of the first tab.
        </Tab>
        <Tab id="two" label="Second">
          Contents of the second tab.
        </Tab>
      </Tabs>,
    )

    const tabOne = container.querySelector('#tab-one')
    const tabTwo = container.querySelector('#tab-two')
    const tabPanelOne = container.querySelector('#panel-one')
    const tabPanelTwo = container.querySelector('#panel-two')

    expect(tabOne).toHaveTextContent('First')
    expect(tabTwo).toHaveTextContent('Second')
    expect(tabPanelOne).toHaveTextContent('Contents of the first tab.')
    expect(tabPanelTwo).toHaveTextContent('Contents of the second tab.')
  })

  it('should set up aria attributes and associate the tab buttons with the tab panels', () => {
    const { container, getByRole } = render(
      <Tabs label="An example of tabs">
        <Tab id="one" label="First">
          Contents of the first tab.
        </Tab>
        <Tab id="two" label="Second">
          Contents of the second tab.
        </Tab>
      </Tabs>,
    )

    expect(getByRole('tablist')).toHaveAttribute(
      'aria-label',
      'An example of tabs',
    )

    const tabOne = container.querySelector('#tab-one')
    const tabTwo = container.querySelector('#tab-two')
    const tabPanelOne = container.querySelector('#panel-one')
    const tabPanelTwo = container.querySelector('#panel-two')

    expect(tabOne).toHaveAttribute('role', 'tab')
    expect(tabOne).toHaveAttribute('aria-controls', 'panel-one')

    expect(tabTwo).toHaveAttribute('role', 'tab')
    expect(tabTwo).toHaveAttribute('aria-controls', 'panel-two')

    expect(tabPanelOne).toHaveAttribute('role', 'tabpanel')
    expect(tabPanelOne).toHaveAttribute('aria-labelledby', 'tab-one')

    expect(tabPanelTwo).toHaveAttribute('role', 'tabpanel')
    expect(tabPanelTwo).toHaveAttribute('aria-labelledby', 'tab-two')
  })

  it('should select a tab when clicked', () => {
    const { container } = render(
      <Tabs label="An example of tabs">
        <Tab id="one" label="First">
          Contents of the first tab.
        </Tab>
        <Tab id="two" label="Second">
          Contents of the second tab.
        </Tab>
      </Tabs>,
    )

    const tabOne = container.querySelector('#tab-one')
    const tabTwo = container.querySelector('#tab-two')
    const tabPanelOne = container.querySelector('#panel-one')
    const tabPanelTwo = container.querySelector('#panel-two')

    expect(tabOne).toHaveAttribute('aria-selected', 'true')
    expect(tabOne).toHaveAttribute('tabindex', '0')

    expect(tabTwo).toHaveAttribute('aria-selected', 'false')
    expect(tabTwo).toHaveAttribute('tabindex', '-1')

    expect(tabPanelOne).not.toHaveAttribute('hidden')
    expect(tabPanelTwo).toHaveAttribute('hidden')

    if (tabTwo) {
      fireEvent.click(tabTwo)
    }

    expect(tabOne).toHaveAttribute('aria-selected', 'false')
    expect(tabOne).toHaveAttribute('tabindex', '-1')

    expect(tabTwo).toHaveAttribute('aria-selected', 'true')
    expect(tabTwo).toHaveAttribute('tabindex', '0')

    expect(tabPanelOne).toHaveAttribute('hidden')
    expect(tabPanelTwo).not.toHaveAttribute('hidden')
  })

  it('should have tab panels reachable by keyboard navigation', () => {
    const { container } = render(
      <Tabs label="An example of tabs">
        <Tab id="one" label="First">
          Contents of the first tab.
        </Tab>
        <Tab id="two" label="Second">
          Contents of the second tab.
        </Tab>
      </Tabs>,
    )

    const tabPanelOne = container.querySelector('#panel-one')
    const tabPanelTwo = container.querySelector('#panel-two')

    expect(tabPanelOne).toHaveAttribute('tabindex', '0')
    expect(tabPanelTwo).toHaveAttribute('tabindex', '0')
  })

  it('should forward the onClick event on the Tab', () => {
    const onClick = jest.fn()
    const { container } = render(
      <Tabs label="An example of tabs">
        <Tab id="one" label="First" onClick={onClick}>
          Contents of the first tab.
        </Tab>
        <Tab id="two" label="Second">
          Contents of the second tab.
        </Tab>
      </Tabs>,
    )

    const tabOne = container.querySelector('#tab-one')

    if (tabOne) {
      fireEvent.click(tabOne)
    }

    expect(onClick).toHaveBeenCalled()
  })

  it('should forward props to the Tab', () => {
    const { container } = render(
      <Tabs label="An example of tabs">
        <Tab id="one" label="First" title="foo">
          Contents of the first tab.
        </Tab>
        <Tab id="two" label="Second">
          Contents of the second tab.
        </Tab>
      </Tabs>,
    )

    expect(container.querySelector('#tab-one')).toHaveAttribute('title', 'foo')
  })

  it('should be able to set the active initial tab', () => {
    const { container } = render(
      <Tabs label="An example of tabs" initialTab="three">
        <Tab id="one" label="First">
          Contents of the first tab.
        </Tab>
        <Tab id="two" label="Second">
          Contents of the second tab.
        </Tab>
        <Tab id="three" label="Third">
          Contents of the third tab.
        </Tab>
      </Tabs>,
    )

    expect(container.querySelector('#tab-three')).toHaveAttribute(
      'tabindex',
      '0',
    )
  })

  it('should log a warning and set the active tab to the first when passing a wrong initialTab', () => {
    const { container } = render(
      <Tabs label="An example of tabs" initialTab="foo">
        <Tab id="one" label="First">
          Contents of the first tab.
        </Tab>
        <Tab id="two" label="Second">
          Contents of the second tab.
        </Tab>
        <Tab id="three" label="Third">
          Contents of the third tab.
        </Tab>
      </Tabs>,
    )

    expect(container.querySelector('#tab-one')).toHaveAttribute('tabindex', '0')

    expect(consoleOutput).toEqual([
      'You passed a wrong initialTab value to Tabs component. Given initialTab ID: foo',
    ])
  })
})
