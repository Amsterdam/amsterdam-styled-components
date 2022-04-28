import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('should render all the pages when the pages < paginationLength', () => {
    render(<Pagination page={1} pageSize={10} collectionSize={60} />)
    expect(screen.getAllByRole('listitem').length).toBe(8) // 6 + 2 buttons
  })

  it('should render the pages including one (last) spacer when the pages > paginationLength', () => {
    render(
      <Pagination
        page={1}
        pageSize={10}
        collectionSize={80}
        paginationLength={7}
      />,
    )
    expect(screen.getAllByRole('listitem').length).toBe(9) // 7 + 2 buttons
    expect(screen.getByTestId('lastSpacer')).toBeInTheDocument()
    expect(screen.queryByTestId('firstSpacer')).not.toBeInTheDocument()
  })

  it('should render the pages including the two spacer when the pages > paginationLength and current page > 4', () => {
    render(
      <Pagination
        page={6}
        pageSize={10}
        collectionSize={100}
        paginationLength={7}
      />,
    )
    expect(screen.getAllByRole('listitem').length).toBe(9) // 9 + 2 buttons
    expect(screen.getByTestId('lastSpacer')).toBeInTheDocument()
    expect(screen.getByTestId('firstSpacer')).toBeInTheDocument()
  })

  it('should navigate to the next page when clicking on the "next" button', () => {
    const onPageChangeMock = jest.fn()
    render(
      <Pagination
        page={6}
        pageSize={10}
        collectionSize={100}
        onPageChange={onPageChangeMock}
      />,
    )

    expect(onPageChangeMock).not.toHaveBeenCalled()
    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '-1')
    expect(screen.getByTestId('pageButton-7')).toHaveAttribute('tabIndex', '0')

    fireEvent.click(screen.getByTestId('nextButton'))
    expect(onPageChangeMock).toHaveBeenCalled()
    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '0')
    expect(screen.getByTestId('pageButton-7')).toHaveAttribute('tabIndex', '-1')
  })

  it('should navigate to the previous page when clicking on the "previous" button', () => {
    const onPageChangeMock = jest.fn()
    render(
      <Pagination
        page={6}
        pageSize={10}
        collectionSize={100}
        onPageChange={onPageChangeMock}
      />,
    )

    expect(onPageChangeMock).not.toHaveBeenCalled()
    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '-1')
    expect(screen.getByTestId('pageButton-5')).toHaveAttribute('tabIndex', '0')

    fireEvent.click(screen.getByTestId('previousButton'))
    expect(onPageChangeMock).toHaveBeenCalled()
    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '0')
    expect(screen.getByTestId('pageButton-5')).toHaveAttribute('tabIndex', '-1')
  })

  it('should be working in a controlled state', () => {
    function ControlledComponent() {
      const [page, setPage] = useState(6)

      return (
        <Pagination
          page={page}
          pageSize={10}
          collectionSize={100}
          onPageChange={setPage}
        />
      )
    }

    render(<ControlledComponent />)

    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '-1')
    expect(screen.getByTestId('pageButton-5')).toHaveAttribute('tabIndex', '0')

    fireEvent.click(screen.getByTestId('previousButton'))
    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '0')
    expect(screen.getByTestId('pageButton-5')).toHaveAttribute('tabIndex', '-1')

    fireEvent.click(screen.getByTestId('nextButton'))
    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '-1')
    expect(screen.getByTestId('pageButton-5')).toHaveAttribute('tabIndex', '0')
  })

  it('should show a warning when prop paginationLength is < 5', () => {
    jest.spyOn(global.console, 'warn')
    render(
      <Pagination
        page={4}
        pageSize={10}
        collectionSize={100}
        paginationLength={4}
      />,
    )
    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenCalledWith(
      'paginationLength prop in Pagination component should be at least 5. If you need a smaller pagination component, please use the CompactPager component. Now falling back to default value',
    )
  })

  it('should be working with controlled page prop', () => {
    const { rerender } = render(
      <Pagination page={6} pageSize={10} collectionSize={100} />,
    )

    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '-1')
    expect(screen.getByTestId('pageButton-5')).toHaveAttribute('tabIndex', '0')

    rerender(<Pagination page={5} pageSize={10} collectionSize={100} />)
    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '0')
    expect(screen.getByTestId('pageButton-5')).toHaveAttribute('tabIndex', '-1')

    rerender(<Pagination page={6} pageSize={10} collectionSize={100} />)
    expect(screen.getByTestId('pageButton-6')).toHaveAttribute('tabIndex', '-1')
    expect(screen.getByTestId('pageButton-5')).toHaveAttribute('tabIndex', '0')
  })
})
