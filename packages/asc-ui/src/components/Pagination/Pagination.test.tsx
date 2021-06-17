import {
  fireEvent,
  getByTestId,
  queryByTestId,
  queryByText,
  render,
  screen,
} from '@testing-library/react'
import 'jest-styled-components'
import Pagination from './Pagination'

const assertNextButtonIsRendered = (container: HTMLElement) => {
  const btn = getByTestId(container, 'btn-next')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveAttribute('aria-label', 'Volgende pagina')
  expect(btn).toHaveAttribute('tabIndex', '0')
}

const assertPreviousButtonIsRendered = (container: HTMLElement) => {
  const btn = getByTestId(container, 'btn-previous')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveAttribute('aria-label', 'Vorige pagina')
  expect(btn).toHaveAttribute('tabIndex', '0')
}

const assertPageNumber = (
  btn: HTMLElement | null,
  pageNumber: number,
  isCurrent: boolean,
) => {
  expect(btn).toHaveTextContent(pageNumber.toString())
  expect(btn).toHaveAttribute(
    'aria-label',
    isCurrent ? `Pagina ${pageNumber}` : `Ga naar pagina ${pageNumber}`,
  )
  expect(btn).toHaveAttribute('aria-current', `${isCurrent}`)
  expect(btn).toHaveAttribute('tabIndex', isCurrent ? '-1' : '0')
  if (!isCurrent) {
    expect(btn).not.toHaveStyleRule('pointer-events', 'none')
    expect(btn).not.toHaveStyleRule('cursor', 'default')
  }
}

const assertUnphasedPageNumbers = (
  container: HTMLElement,
  currentPage: number,
) => {
  for (let i = 1; i <= 5; i += 1) {
    const isCurrent = i === currentPage
    const btn = getByTestId(container, `btn-page-${i}`)
    // @ts-ignore
    assertPageNumber.bind(this)(btn, i, isCurrent)
  }
  expect(queryByTestId(container, `btn-page-6`)).not.toBeInTheDocument()
  expect(queryByText(container, '&mldr;')).not.toBeInTheDocument()
}

describe('Pagination', () => {
  describe.each([[1], [2], [3], [4], [5]])(
    'Unphased; page %s active',
    (page: number) => {
      let container: HTMLElement
      const mockOnChange = jest.fn()

      beforeEach(() => {
        ;({ container } = render(
          <Pagination
            collectionSize={50}
            pageSize={10}
            page={page}
            onPageChange={mockOnChange}
          />,
        ))
      })

      test('Renders 5 links', () => {
        // @ts-ignore
        assertUnphasedPageNumbers.bind(this)(container, page)
      })

      test('Conditionally renders next button', () => {
        if (page < 5) {
          // @ts-ignore
          assertNextButtonIsRendered.bind(this)(container)
        } else {
          expect(queryByTestId(container, 'btn-next')).not.toBeInTheDocument()
        }
      })

      test('Conditionally renders previous button', () => {
        if (page > 1) {
          // @ts-ignore
          assertPreviousButtonIsRendered.bind(this)(container)
        } else {
          expect(
            queryByTestId(container, 'btn-previous'),
          ).not.toBeInTheDocument()
        }
      })

      test('Triggers onPageChange callback on previous', () => {
        if (page > 1) {
          fireEvent.click(getByTestId(container, 'btn-previous'))
          expect(mockOnChange).toHaveBeenLastCalledWith(page - 1)
        }
      })

      test('Triggers onPageChange callback on next', () => {
        if (page < 5) {
          fireEvent.click(getByTestId(container, 'btn-next'))
          expect(mockOnChange).toHaveBeenLastCalledWith(page + 1)
        }
      })

      test.each([[1], [2], [3], [4], [5]].filter((i) => i[0] !== page))(
        'Triggers onPageChange callback when clicking page %s',
        (pageNumber) => {
          fireEvent.click(getByTestId(container, `btn-page-${pageNumber}`))
          expect(mockOnChange).toHaveBeenLastCalledWith(pageNumber)
        },
      )

      test('Active page is not clickable', () => {
        const btn = getByTestId(container, `btn-page-${page}`)
        expect(btn).toHaveStyleRule('pointer-events', 'none')
        expect(btn).toHaveStyleRule('cursor', 'default')
      })
    },
  )

  describe('Phased', () => {
    describe('100 pages', () => {
      test('1st page active', () => {
        const { container } = render(
          <Pagination collectionSize={999} pageSize={10} page={1} />,
        )
        expect(queryByTestId(container, 'btn-previous')).not.toBeInTheDocument()
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-1'),
          1,
          true,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-2'),
          2,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-100'),
          100,
          false,
        )
        expect(queryByTestId(container, 'btn-next')).toBeInTheDocument()
        expect(queryByTestId(container, 'spacer-1')).not.toBeInTheDocument()
        expect(
          queryByTestId(container, 'spacer-2')?.nextSibling?.textContent,
        ).toEqual('100')
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(5)
      })

      test('2nd page active', () => {
        const { container } = render(
          <Pagination collectionSize={999} pageSize={10} page={2} />,
        )
        expect(queryByTestId(container, 'btn-previous')).toBeInTheDocument()
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-1'),
          1,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-2'),
          2,
          true,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-3'),
          3,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-100'),
          100,
          false,
        )
        expect(queryByTestId(container, 'btn-next')).toBeInTheDocument()
        expect(queryByTestId(container, 'spacer-1')).not.toBeInTheDocument()
        expect(
          queryByTestId(container, 'spacer-2')?.nextSibling?.textContent,
        ).toEqual('100')
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(7)
      })

      test('3rd page active', () => {
        const { container } = render(
          <Pagination collectionSize={999} pageSize={10} page={3} />,
        )
        expect(queryByTestId(container, 'btn-previous')).toBeInTheDocument()
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-1'),
          1,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-2'),
          2,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-3'),
          3,
          true,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-4'),
          4,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-100'),
          100,
          false,
        )
        expect(queryByTestId(container, 'btn-next')).toBeInTheDocument()
        expect(queryByTestId(container, 'spacer-1')).not.toBeInTheDocument()
        expect(
          queryByTestId(container, 'spacer-2')?.nextSibling?.textContent,
        ).toEqual('100')
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(8)
      })

      test('4th page active', () => {
        const { container } = render(
          <Pagination collectionSize={999} pageSize={10} page={4} />,
        )
        expect(queryByTestId(container, 'btn-previous')).toBeInTheDocument()
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-1'),
          1,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-3'),
          3,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-4'),
          4,
          true,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-5'),
          5,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-100'),
          100,
          false,
        )
        expect(queryByTestId(container, 'btn-next')).toBeInTheDocument()
        expect(
          queryByTestId(container, 'spacer-1')?.nextSibling?.textContent,
        ).toEqual('3')
        expect(
          queryByTestId(container, 'spacer-2')?.nextSibling?.textContent,
        ).toEqual('100')
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(9)
      })

      test('97th page active', () => {
        const { container } = render(
          <Pagination collectionSize={999} pageSize={10} page={97} />,
        )
        expect(queryByTestId(container, 'btn-previous')).toBeInTheDocument()
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-1'),
          1,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-96'),
          96,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-97'),
          97,
          true,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-98'),
          98,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-100'),
          100,
          false,
        )
        expect(queryByTestId(container, 'btn-next')).toBeInTheDocument()
        expect(
          queryByTestId(container, 'spacer-1')?.nextSibling?.textContent,
        ).toEqual('96')
        expect(
          queryByTestId(container, 'spacer-2')?.nextSibling?.textContent,
        ).toEqual('100')
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(9)
      })

      test('98th page active', () => {
        const { container } = render(
          <Pagination collectionSize={999} pageSize={10} page={98} />,
        )
        expect(queryByTestId(container, 'btn-previous')).toBeInTheDocument()
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-1'),
          1,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-97'),
          97,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-98'),
          98,
          true,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-99'),
          99,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-100'),
          100,
          false,
        )
        expect(queryByTestId(container, 'btn-next')).toBeInTheDocument()
        expect(
          queryByTestId(container, 'spacer-1')?.nextSibling?.textContent,
        ).toEqual('97')
        expect(queryByTestId(container, 'spacer-2')).not.toBeInTheDocument()
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(8)
      })

      test('99th page active', () => {
        const { container } = render(
          <Pagination collectionSize={999} pageSize={10} page={99} />,
        )
        expect(queryByTestId(container, 'btn-previous')).toBeInTheDocument()
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-1'),
          1,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-98'),
          98,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-99'),
          99,
          true,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-100'),
          100,
          false,
        )
        expect(queryByTestId(container, 'btn-next')).toBeInTheDocument()
        expect(
          queryByTestId(container, 'spacer-1')?.nextSibling?.textContent,
        ).toEqual('98')
        expect(queryByTestId(container, 'spacer-2')).not.toBeInTheDocument()
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(7)
      })

      test('100th page active', () => {
        const { container } = render(
          <Pagination collectionSize={999} pageSize={10} page={100} />,
        )
        expect(queryByTestId(container, 'btn-previous')).toBeInTheDocument()
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-99'),
          99,
          false,
        )
        // @ts-ignore
        assertPageNumber.bind(this)(
          queryByTestId(container, 'btn-page-100'),
          100,
          true,
        )
        expect(queryByTestId(container, 'btn-next')).not.toBeInTheDocument()
        expect(
          queryByTestId(container, 'spacer-1')?.nextSibling?.textContent,
        ).toEqual('99')
        expect(queryByTestId(container, 'spacer-2')).not.toBeInTheDocument()
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(5)
      })
    })
  })
})
