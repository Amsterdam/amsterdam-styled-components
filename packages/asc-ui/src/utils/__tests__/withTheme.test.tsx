import React from 'react'
import { renderWithTheme, shallowWithTheme, mountWithTheme } from '../withTheme'

describe('withTheme helpers', () => {
  it('should work with render', () => {
    const component = renderWithTheme(<p>test</p>)
    expect(component).toBeTruthy()
  })

  it('should work with shallow', () => {
    const component = shallowWithTheme(<p>test</p>)
    expect(component).toBeTruthy()
  })

  it('should work with mount', () => {
    const component = mountWithTheme(<p>test</p>)
    expect(component).toBeTruthy()
  })
})
