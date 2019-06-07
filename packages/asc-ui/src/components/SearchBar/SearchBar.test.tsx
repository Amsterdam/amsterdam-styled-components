import * as React from 'react'
import SearchBar from './SearchBar'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

jest.useFakeTimers()

describe('SearchBar', () => {
  let component: Cheerio

  beforeEach(() => {
    const fn = jest.fn()
    component = renderWithTheme(
      <SearchBar onSubmit={fn} onChange={fn}>
        searchbar-content
      </SearchBar>,
    )
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
