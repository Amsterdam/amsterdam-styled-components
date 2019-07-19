import * as React from 'react'
import Publication from './Publication'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

jest.useFakeTimers()

describe('Publication', () => {
  let component: any

  it('should render', () => {
    component = renderWithTheme(
      <Publication>This is the publication content</Publication>,
    )
    expect(component).toMatchSnapshot()
  })
})
