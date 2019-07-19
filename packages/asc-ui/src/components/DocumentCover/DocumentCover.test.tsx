import * as React from 'react'
import DocumentCover from './DocumentCover'
import { renderWithTheme, mountWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'
import Button from '../Button'

jest.useFakeTimers()

describe('DocumentCover', () => {
  const mockFn = jest.fn()
  let component: any

  it('should render', () => {
    component = renderWithTheme(
      <DocumentCover
        imageSrc="https://data.amsterdam.nl/assets/images/amsterdam-maps.png"
        onClick={mockFn}
        description="Download PDF (12MB)"
      />,
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger the downlaod action when the button is clicked', () => {
    component = mountWithTheme(
      <DocumentCover
        imageSrc="https://data.amsterdam.nl/assets/images/amsterdam-maps.png"
        onClick={mockFn}
        description="Download PDF (12MB)"
      />,
    )
    component.find(Button).simulate('click')
    expect(mockFn).toHaveBeenCalled()
  })
})
