import { Location } from '@amsterdam/asc-assets'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../../theme'
import TopTaskLink from './TopTaskLink'

describe('TopTestLink', () => {
  it('should render', () => {
    const { queryByText, queryByTestId } = render(
      <ThemeProvider>
        <TopTaskLink
          href="https://amsterdam.nl"
          icon={Location}
          title="City hall: locations and opening hour"
          text="A beautiful description"
        />
      </ThemeProvider>,
    )

    expect(
      queryByText('City hall: locations and opening hour'),
    ).toBeInTheDocument()
    expect(queryByText('A beautiful description')).toBeInTheDocument()
    expect(queryByTestId('icon')).toBeInTheDocument()
    expect(queryByTestId('root')).toBeInstanceOf(HTMLAnchorElement)
    expect(queryByTestId('root')?.getAttribute('href')).toEqual(
      'https://amsterdam.nl',
    )
  })
})
