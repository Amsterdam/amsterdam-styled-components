import { render } from '@testing-library/react'
import { createRef } from 'react'
import ThemeProvider from '../../theme/ThemeProvider'
import TextArea from './TextArea'

describe('TextArea', () => {
  it('should render', () => {
    const { container } = render(<TextArea value="Some text in the textarea" />)

    expect(container.firstChild).toBeDefined()
  })

  it('should handle refs', () => {
    const ref = createRef<HTMLTextAreaElement>()

    render(
      <ThemeProvider>
        <TextArea ref={ref} />
      </ThemeProvider>,
    )

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})
