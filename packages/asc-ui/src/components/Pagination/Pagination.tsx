import React from 'react'
import { ChevronLeft, ChevronRight } from '@datapunt/asc-assets'
import PaginationStyle, {
  Props,
  PageNumber,
  PreviousButton,
  NextButton,
} from './PaginationStyle'

const Pagination: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  page = 1,
  collectionSize,
  pageSize = 10,
  onPageChange,
  ...otherProps
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(page)
  const totalPages = Math.ceil(collectionSize / pageSize)
  const pageCluster = [currentPage]
  if (currentPage > 2) {
    pageCluster.unshift(currentPage - 1)
  }
  if (totalPages <= 5 || currentPage < totalPages - 1) {
    pageCluster.push(currentPage + 1)
  }

  React.useEffect(() => {
    if (onPageChange !== undefined) onPageChange(currentPage)
  }, [currentPage, onPageChange])

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const renderButton = (pageNumber: number) => {
    const isCurrent = pageNumber === currentPage
    return (
      <PageNumber
        aria-label={
          isCurrent ? `Pagina ${pageNumber}` : `Ga naar pagina ${pageNumber}`
        }
        aria-current={isCurrent}
        data-testid={`btn-page-${pageNumber}`}
        onClick={() => setCurrentPage(pageNumber)}
        className="page-number"
        isCurrent={isCurrent}
        tabIndex={isCurrent ? -1 : 0}
      >
        {pageNumber}
      </PageNumber>
    )
  }

  const renderUnphased = () => {
    return (
      <>
        {Array.from(Array(totalPages).keys()).map((num) => (
          <li>{renderButton(num + 1)}</li>
        ))}
      </>
    )
  }

  const renderPhased = () => {
    return (
      <>
        {currentPage > 1 && <li key="pag-1">{renderButton(1)}</li>}
        {currentPage > 3 && (
          <li key="pag-spacer-1" className="spacer">
            ...
          </li>
        )}
        {pageCluster.map((num) => (
          <li key={`pag-${num}`}>{renderButton(num)}</li>
        ))}
        {currentPage < totalPages - 2 && (
          <li key="pag-spacer-2" className="spacer">
            ...
          </li>
        )}
        {currentPage < totalPages && (
          <li key={`pag-${totalPages}`}>{renderButton(totalPages)}</li>
        )}
      </>
    )
  }

  return (
    <PaginationStyle
      collectionSize={collectionSize}
      page={page}
      pageSize={pageSize}
      {...otherProps}
      aria-label="paginatie navigatie"
    >
      <ul>
        {currentPage > 1 && (
          <li key="pag-previous">
            <PreviousButton
              type="button"
              aria-label="Vorige pagina"
              tabIndex={0}
              data-testid="btn-previous"
              onClick={handlePrevious}
              className="previous-page"
              iconLeft={<ChevronLeft />}
              variant="textButton"
            >
              vorige
            </PreviousButton>
          </li>
        )}
        {totalPages <= 5 && renderUnphased()}
        {totalPages > 5 && renderPhased()}
        {currentPage < totalPages && (
          <li key="pag-next">
            <NextButton
              type="button"
              aria-label="Volgende pagina"
              tabIndex={0}
              data-testid="btn-next"
              onClick={handleNext}
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
