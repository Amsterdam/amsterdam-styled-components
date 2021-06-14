import React from 'react'
import { Pagination } from '@datapunt/asc-ui'

export default {
  title: 'UI/Pagination',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultState = () => (
  <Pagination collectionSize={500} pageSize={10} page={1} />
)
export const CurrentPage2Phase = () => (
  <Pagination collectionSize={1000} pageSize={10} page={2} />
)
export const CurrentPage3Phase = () => (
  <Pagination collectionSize={1000} pageSize={10} page={3} />
)
export const CurrentPage4Phase = () => (
  <Pagination collectionSize={1000} pageSize={10} page={4} />
)
export const CurrentPage5Phase = () => (
  <Pagination collectionSize={1000} pageSize={10} page={5} />
)
export const CurrentPage97Phase = () => (
  <Pagination collectionSize={1000} pageSize={10} page={97} />
)
export const CurrentPage98Phase = () => (
  <Pagination collectionSize={1000} pageSize={10} page={98} />
)
export const CurrentPage99Phase = () => (
  <Pagination collectionSize={1000} pageSize={10} page={99} />
)
export const CurrentPage100Phase = () => (
  <Pagination collectionSize={1000} pageSize={10} page={100} />
)
