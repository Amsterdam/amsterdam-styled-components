import type { HTMLAttributes } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from '@amsterdam/asc-assets'
import {
  PageNumberStyle,
  PreviousButton,
  NextButton,
  ListItem,
  List,
} from './PaginationStyle'

export interface PaginationProps {
  /**
   * The current page number. Page numbers start with `1`.
   */
  page: number
  /**
   * The number of items per page.
   */
  pageSize: number
  /**
   * The number of items in your paginated collection.
   *
   * Note that this is not the same as the number of pages, but will be used to calculate it instead.
   */
  collectionSize: number
  /**
   * Callback triggered when interaction with the pager changes the page number.
   */
  onPageChange?: (page: number) => void
  /**
   * The number of pages to show in the pagination
   */
  paginationLength?: number
  /**
   * Label for previous
   */
  labelPrevious?: string
  /**
   * Label for next
   */
  labelNext?: string
  /**
   * Aria Label for previous
   */
  ariaLabelPrevious?: string
  /**
   * Aria Label for next
   */
  ariaLabelNext?: string
}

const DEFAULT_PAGINATION_LENGTH = 7

function Pagination({
  collectionSize,
  onPageChange,
  page = 1,
  pageSize = 10,
  paginationLength = DEFAULT_PAGINATION_LENGTH,
  labelPrevious = 'vorige',
  labelNext = 'volgende',
  ariaLabelPrevious = 'Vorige pagina',
  ariaLabelNext = 'Volgende pagina',
  ...otherProps
}: PaginationProps & HTMLAttributes<HTMLElement>) {
  const [currentPage, setCurrentPage] = useState<number>(page)

  const totalPages = useMemo(
    () => Math.ceil(collectionSize / pageSize),
    [collectionSize, pageSize],
  )

  useEffect(() => {
    if (paginationLength < 5) {
      // eslint-disable-next-line no-console
      console.warn(
        'paginationLength prop in Pagination component should be at least 5. If you need a smaller pagination component, please use the CompactPager component. Now falling back to default value',
      )
    }
  }, [paginationLength])

  // If page prop changes, set currentPage so component can be managed externally
  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  /**
   * This returns an array of the range, including spacers
   *
   * @example
   * currentPage = 4, totalPages = 7
   * // returns [1, 2, 3, 4, 5, 6, 7]
   *
   * @example
   * currentPage = 5, totalPages = 100
   * // returns [1, 'firstSpacer', 4, 5, 6, 'lastSpacer', 100]
   *
   * @example
   * currentPage = 97, totalPages = 100
   * // returns [1, 'firstSpacer', 96, 97, 98, 99, 100]
   */
  const range = useMemo(() => {
    const min = 1
    let paginatedLength =
      paginationLength < 5 ? DEFAULT_PAGINATION_LENGTH : paginationLength
    if (paginationLength > totalPages) {
      paginatedLength = totalPages
    }

    let start = currentPage - Math.floor(paginatedLength / 2)
    start = Math.max(start, min)
    start = Math.min(start, min + totalPages - paginatedLength)

    return Array.from({ length: paginatedLength }, (el, i) => start + i).reduce<
      Array<string | number>
    >((acc, pageNr, index) => {
      if (index === 0 && pageNr !== 1) {
        return [1, 'firstSpacer']
      }
      if (
        totalPages > paginatedLength &&
        index === paginatedLength - 2 &&
        currentPage < totalPages - 2
      ) {
        return [...acc, 'lastSpacer', totalPages]
      }
      // Skip a number when spacer is already add
      if (
        (acc.includes('firstSpacer') && index === 1) ||
        (acc.includes('lastSpacer') && index === paginatedLength - 1)
      ) {
        return acc
      }
      return [...acc, pageNr]
    }, [])
  }, [currentPage, totalPages, paginationLength])

  const onChangePage = (newPage: number) => {
    if (onPageChange !== undefined) onPageChange(newPage)
    setCurrentPage(newPage)
  }

  const onPrevious = () => {
    onChangePage(currentPage - 1)
  }

  const onNext = () => {
    onChangePage(currentPage + 1)
  }

  return (
    <nav aria-label="paginering" role="navigation" {...otherProps}>
      <List>
        <ListItem>
          <PreviousButton
            type="button"
            aria-label={ariaLabelPrevious}
            tabIndex={0}
            data-testid="previousButton"
            onClick={onPrevious}
            iconLeft={<ChevronLeft />}
            variant="textButton"
            disabled={currentPage === 1}
          >
            {labelPrevious}
          </PreviousButton>
        </ListItem>
        {range.map((pageNumberOrSpacer) =>
          typeof pageNumberOrSpacer === 'number' ? (
            <ListItem key={`pag-${pageNumberOrSpacer}`}>
              <PageNumberStyle
                aria-label={
                  pageNumberOrSpacer === currentPage
                    ? `Pagina ${pageNumberOrSpacer}`
                    : `Ga naar pagina ${pageNumberOrSpacer}`
                }
                aria-current={pageNumberOrSpacer === currentPage}
                data-testid={`pageButton-${pageNumberOrSpacer}`}
                onClick={() => onChangePage(pageNumberOrSpacer)}
                isCurrent={pageNumberOrSpacer === currentPage}
                tabIndex={pageNumberOrSpacer === currentPage ? -1 : 0}
              >
                {pageNumberOrSpacer}
              </PageNumberStyle>
            </ListItem>
          ) : (
            <ListItem key={pageNumberOrSpacer} data-testid={pageNumberOrSpacer}>
              {'\u2026'}
            </ListItem>
          ),
        )}
        <ListItem>
          <NextButton
            type="button"
            aria-label={ariaLabelNext}
            tabIndex={0}
            data-testid="nextButton"
            onClick={onNext}
            iconRight={<ChevronRight />}
            variant="textButton"
            disabled={currentPage === totalPages}
          >
            {labelNext}
          </NextButton>
        </ListItem>
      </List>
    </nav>
  )
}

export default Pagination
