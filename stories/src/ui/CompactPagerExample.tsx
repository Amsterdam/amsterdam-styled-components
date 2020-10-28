import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { CompactPager } from '@amsterdam/asc-ui'

const CompactPagerExample: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
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
