import { FunctionComponent, useState } from 'react'
import { action } from '@storybook/addon-actions'
import { CompactPager } from '@amsterdam/asc-ui'

const CompactPagerExample: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <CompactPager
      page={currentPage}
      pageSize={20}
      collectionSize={60}
      onPageChange={(page) => {
        action(`current page ${page}`)(page)
        setCurrentPage(page)
      }}
    />
  )
}

export default CompactPagerExample
