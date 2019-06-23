import * as React from 'react'
import { mount } from 'enzyme'
import SearchBar from '../SearchBar'
import SearchBarToggle from './SearchBarToggle'
import ButtonToggle from '../ButtonToggle'
import 'jest-styled-components'

jest.useFakeTimers()

describe('SearchBarToggle', () => {
  let component: any

  beforeEach(() => {
    const fn = jest.fn()
    component = mount(
      <SearchBarToggle onSubmit={fn} onChange={fn}>
        searchbar-content
      </SearchBarToggle>,
    )
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })

  it('it should show the searchbar when clicking on the button', () => {
    expect(component.find(SearchBar).exists()).toBe(false)
    component.find(ButtonToggle).simulate('click')
    expect(component.find(SearchBar).exists()).toBe(true)
  })
})
