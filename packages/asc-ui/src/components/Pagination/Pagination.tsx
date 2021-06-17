import React from 'react'
import { ChevronLeft, ChevronRight } from '@amsterdam/asc-assets'
import PaginationStyle, {
  Props,
  PageNumberStyle,
  PreviousButton,
  NextButton,
} from './PaginationStyle'

const PageNumber = ({
  pageNumber,
  currentPage,
  onPageChange,
}: {
  pageNumber: number
  currentPage: number
  onPageChange: (page: number) => void
}) => {
  const isCurrent = pageNumber === currentPage
  return (
    <PageNumberStyle
      aria-label={
        isCurrent ? `Pagina ${pageNumber}` : `Ga naar pagina ${pageNumber}`
      }
      aria-current={isCurrent}
      data-testid={`btn-page-${pageNumber}`}
      onClick={() => onPageChange(pageNumber)}
      isCurrent={isCurrent}
      tabIndex={isCurrent ? -1 : 0}
    >
      {pageNumber}
    </PageNumberStyle>
  )
}

const Unphased = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}) => {
  return (
    <>
      {Array.from(Array(totalPages).keys()).map((pageNumber) => (
        <li key={`pag-${pageNumber + 1}`}>
          <PageNumber
            pageNumber={pageNumber + 1}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </li>
      ))}
    </>
  )
}

const Phased = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}) => {
  const [pageCluster, setPageCluster] = React.useState<number[]>([])

  React.useEffect(() => {
    const cluster = [currentPage]
    if (currentPage > 2) {
      cluster.unshift(currentPage - 1)
    }
    if (totalPages <= 5 || currentPage < totalPages - 1) {
      cluster.push(currentPage + 1)
    }
    setPageCluster(cluster)
  }, [currentPage, totalPages])

  return (
    <>
      {currentPage > 1 && (
        <li key="pag-1">
          <PageNumber
            pageNumber={1}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </li>
      )}
      {currentPage > 3 && (
        <li
          key="pag-spacer-1"
          dangerouslySetInnerHTML={{ __html: '&mldr;' }}
          data-testid="spacer-1"
        />
      )}
      {pageCluster.map((num) => (
        <li key={`pag-${num}`}>
          <PageNumber
            pageNumber={num}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </li>
      ))}
      {currentPage < totalPages - 2 && (
        // eslint-disable-next-line react/no-danger
        <li
          key="pag-spacer-2"
          dangerouslySetInnerHTML={{ __html: '&mldr;' }}
          data-testid="spacer-2"
        />
      )}
      {currentPage < totalPages && (
        <li key={`pag-${totalPages}`}>
          <PageNumber
            pageNumber={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </li>
      )}
    </>
  )
}

const Pagination: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  page = 1,
  collectionSize,
  pageSize = 10,
  onPageChange,
  ...otherProps
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(page)
  const [totalPages, setTotalPages] = React.useState<number>(
    Math.ceil(collectionSize / pageSize),
  )

  React.useEffect(() => {
    if (onPageChange !== undefined) onPageChange(currentPage)
  }, [currentPage, onPageChange])

  React.useEffect(() => {
    setTotalPages(Math.ceil(collectionSize / pageSize))
  }, [collectionSize, pageSize])

  const onPrevious = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNext = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <PaginationStyle
      collectionSize={collectionSize}
      page={page}
      pageSize={pageSize}
      {...otherProps}
      aria-label="paginatie navigatie"
      role="navigation"
    >
      <ul>
        {currentPage > 1 && (
          <li key="pag-previous">
            <PreviousButton
              type="button"
              aria-label="Vorige pagina"
              tabIndex={0}
              data-testid="btn-previous"
              onClick={onPrevious}
              className="previous-page"
              iconLeft={<ChevronLeft />}
              variant="textButton"
            >
              vorige
            </PreviousButton>
          </li>
        )}
        {totalPages <= 5 && (
          <Unphased
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          />
        )}
        {totalPages > 5 && (
          <Phased
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          />
        )}
        {currentPage < totalPages && (
          <li key="pag-next">
            <NextButton
              type="button"
              aria-label="Volgende pagina"
              tabIndex={0}
              data-testid="btn-next"
              onClick={onNext}
              className="next-page"
              iconRight={<ChevronRight />}
              variant="textButton"
            >
              volgende
            </NextButton>
          </li>
        )}
      </ul>
    </PaginationStyle>
  )
}

export default Pagination
