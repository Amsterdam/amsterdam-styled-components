import React, { useState } from 'react'
import { CompactPager } from '@amsterdam/asc-ui'

const CompactPagerWithState: React.FC<React.HTMLAttributes<
  HTMLElement
>> = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <CompactPager
      page={currentPage}
      pageSize={20}
      collectionSize={60}
      onPageChange={(page) => setCurrentPage(page)}
    />
  )
}

export default CompactPagerWithState
