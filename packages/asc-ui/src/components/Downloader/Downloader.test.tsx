import * as React from 'react'
import Downloader from './Downloader'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

jest.useFakeTimers()

describe('Downloader', () => {
  let component: Cheerio

  beforeEach(() => {
    component = renderWithTheme(
      <Downloader
        imageSrc="https://data.amsterdam.nl/assets/images/amsterdam-maps.png"
        onClick={() => {}}
        description="Download PDF (12MB)"
      ></Downloader>,
    )
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
