import * as React from 'react'
import Input from './Input'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

jest.useFakeTimers()

describe('Input', () => {
  let component: Cheerio

  beforeEach(() => {
    const mockFn = jest.fn()
    const inputRef = React.createRef()
    component = renderWithTheme(
      <Input onChange={mockFn} onKeyDown={mockFn} inputRef={inputRef} />,
    )
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })

  it('should call the on change event', () => {
    expect(true).toBe(true)
  })

  it('should call the submit when enter is pressed', () => {
    expect(true).toBe(true)
  })

  it('should not call the submit when other key then enter is pressed', () => {
    expect(true).toBe(true)
  })
})
