import { ChevronLeft, ChevronRight } from '@amsterdam/asc-assets'
import type { HTMLAttributes } from 'react'
import CompactPagerStyle, { PagerButton, PagerText } from './CompactPagerStyle'
import { NEXT_BUTTON, PREV_BUTTON } from './test-ids'

function clampNumber(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function determineTotalPages(collectionSize: number, pageSize: number) {
  if (collectionSize < 1 || pageSize < 1) {
    return 1
  }

  return Math.ceil(collectionSize / pageSize)
}

export interface Props {
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
}

function CompactPager({
  page,
  pageSize,
  collectionSize,
  onPageChange,
  ...otherProps
}: Props & HTMLAttributes<HTMLElement>) {
  const totalPages = determineTotalPages(collectionSize, pageSize)
  const hasPrevPage = page > 1
  const hasNextPage = page < totalPages

  function movePageCursor(difference: number) {
    if (onPageChange === undefined) {
      return
    }

    const newPage = clampNumber(page + difference, 0, totalPages)

    if (newPage !== page) {
      onPageChange(newPage)
    }
  }

  return (
    <CompactPagerStyle {...otherProps}>
      <PagerButton
        size={44}
        variant="blank"
        icon={<ChevronLeft />}
        disabled={!hasPrevPage}
        aria-label="Vorige pagina"
        onClick={() => movePageCursor(-1)}
        data-testid={PREV_BUTTON}
      />
      <PagerText
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Pagina ${page} van ${totalPages}`}
      >
        <strong>{page}</strong> van {totalPages}
      </PagerText>
      <PagerButton
        size={44}
        variant="blank"
        icon={<ChevronRight />}
        disabled={!hasNextPage}
        aria-label="Volgende pagina"
        onClick={() => movePageCursor(1)}
        data-testid={NEXT_BUTTON}
      />
    </CompactPagerStyle>
  )
}

export default CompactPager
