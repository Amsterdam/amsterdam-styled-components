import React from 'react'
import TopBar from './TopBar'
import { renderWithTheme } from '../../utils/withTheme'

jest.useFakeTimers()

describe('TopBar', () => {
  let component: Cheerio

  beforeEach(() => {
    component = renderWithTheme(
      <TopBar backgroundColor="red">topbar-content</TopBar>,
    )
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
