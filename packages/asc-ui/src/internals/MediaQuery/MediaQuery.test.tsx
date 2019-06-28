import React from 'react'
import MediaQuery, { hideAt } from './MediaQuery'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

describe('hideAt', () => {
  it('should return the correct style', () => {
    const css = hideAt({ min: '600px', max: '1200px' })
    expect(css).toBe(
      ' @media screen and (min-width: 600px) { display: none; } @media screen and (max-width: 1200px) { display: none; }',
    )
  })
})

describe('MediaQuery', () => {
  it.only('should create a button with media queries', () => {
    const component = renderWithTheme(
      <MediaQuery min="300px" max="900px">
        <button type="button">Test</button>
      </MediaQuery>,
    )
    expect(component).toMatchSnapshot()
  })
})
