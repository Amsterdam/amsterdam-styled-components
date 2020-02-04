import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import CompactPager from './CompactPager'

storiesOf('Composed/CompactPager', module)
  .addDecorator(storyFn => (
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
  ))
  .add('variants', () => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <CompactPager
        page={currentPage}
        pageSize={20}
        collectionSize={60}
        onPageChange={page => setCurrentPage(page)}
      />
    )
  })
