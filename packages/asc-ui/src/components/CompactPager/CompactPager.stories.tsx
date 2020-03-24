import React, { useState } from 'react'
import CompactPager from './CompactPager'

export default {
  title: 'Experimental/Composed/CompactPager',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          display: 'flex',
          maxWidth: 400,
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '40px 10px',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
}

export const Variants = () => {
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
