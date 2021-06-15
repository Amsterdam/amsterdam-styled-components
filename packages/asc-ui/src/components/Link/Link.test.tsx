import { render } from '@testing-library/react'
import Link from './Link'
import { ascDefaultTheme, themeColor } from '../../index'
import { ThemeProvider } from '../../theme'

describe('Link', () => {
  it('should render without any icons', () => {
    const { container } = render(<Link href="/">default link</Link>)

    expect(container.firstChild).toBeDefined()
    expect(container.querySelector('svg')).toBeNull()
  })

  it('should render an external or download icon', () => {
    const { container, rerender } = render(
      <Link icon="external" href="/">
        default link
      </Link>,
    )
    expect(container.querySelector('svg')).toBeDefined()

    rerender(
      <Link icon="download" href="/">
        default link
      </Link>,
    )
    expect(container.querySelector('svg')).toBeDefined()
  })

  it('should render the inline variant', () => {
    const { container } = render(
      <ThemeProvider>
        <Link variant="inline" href="/">
          default link
        </Link>
      </ThemeProvider>,
    )

    expect(container.firstChild).toHaveStyleRule(
      'color',
      themeColor('primary')({ theme: ascDefaultTheme }),
    )
  })

  it('should render the blank variant', () => {
    const { container } = render(
      <Link variant="blank" href="/">
        default link
      </Link>,
    )

    expect(container.firstChild).toHaveStyleRule('display', 'inline-block')
  })

  it('should render the an icon when passing the inList prop', () => {
    const { container } = render(
      <Link inList href="/">
        default link
      </Link>,
    )

    expect(container.querySelector('svg')).toBeDefined()
  })
})
