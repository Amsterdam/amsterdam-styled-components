import { Location } from '@datapunt/asc-assets'
import { render } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from '../../theme'
import TopTaskButton from './TopTaskButton'

describe('TopTaskButton', () => {
  it('should render', () => {
    const { queryByText, queryByTestId } = render(
      <ThemeProvider>
        <TopTaskButton
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
