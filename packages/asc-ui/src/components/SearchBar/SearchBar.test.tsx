import * as React from 'react'
import { shallow } from 'enzyme'
import { Search } from '@datapunt/asc-assets'
import SearchBar from './SearchBar'
import 'jest-styled-components'

jest.useFakeTimers()

describe('SearchBar', () => {
  let component: any

  const mockOnSubmit = jest.fn()

  beforeEach(() => {
    component = shallow(
      <SearchBar onSubmit={mockOnSubmit} onChange={() => {}}>
        searchbar-content
      </SearchBar>,
    )
  })

  it('should render the label and icon', () => {
    const { children } = component.props()
    const icon = component.find('Icon')

    expect(icon.exists()).toBeTruthy()
    expect(icon.props().children).toStrictEqual(<Search />)

    expect(children[children.length - 1]).toBe('searchbar-content')
  })

  it('should handle the onClick event', () => {
    const button = component.find('Button')

    button.simulate('click')

    expect(mockOnSubmit).toHaveBeenCalled()
  })
})
