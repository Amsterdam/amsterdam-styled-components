import * as React from 'react'
import Downloader from './Downloader'
import { renderWithTheme, mountWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'
import Button from '../Button'

jest.useFakeTimers()

describe('Downloader', () => {
  const mockFn = jest.fn()
  let component: any

  it('should render', () => {
    component = renderWithTheme(
      <Downloader
        imageSrc="https://data.amsterdam.nl/assets/images/amsterdam-maps.png"
        onClick={mockFn}
        description="Download PDF (12MB)"
      ></Downloader>,
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger the downlaod action when the button is clicked', () => {
    component = mountWithTheme(
      <Downloader
        imageSrc="https://data.amsterdam.nl/assets/images/amsterdam-maps.png"
        onClick={mockFn}
        description="Download PDF (12MB)"
      ></Downloader>,
    )
    component.find(Button).simulate('click')
    expect(mockFn).toHaveBeenCalled()
  })
})
