import { render, fireEvent } from '@testing-library/react'
import DocumentCover from './DocumentCover'
import ThemeProvider from '../../theme/ThemeProvider'

jest.useFakeTimers()

describe('DocumentCover', () => {
  it('should trigger the download action when the button is clicked', () => {
    const mockFn = jest.fn()
    const { getByText } = render(
      <ThemeProvider>
        <DocumentCover
          imageSrc="https://data.amsterdam.nl/assets/images/amsterdam-maps.png"
          onClick={mockFn}
          description="Download PDF (12MB)"
        />
      </ThemeProvider>,
    )
    fireEvent.click(getByText('Download PDF (12MB)'))
    expect(mockFn).toHaveBeenCalled()
  })
})
