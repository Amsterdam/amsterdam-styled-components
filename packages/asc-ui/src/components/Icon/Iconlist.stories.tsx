import { Location, Passport } from '@datapunt/asc-assets'
import React from 'react'
import Icon from './Icon'

export default {
  title: 'Experimental/Atoms/Iconlist',
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

export const AllIcons = () => (
  <>
    <span>
      <Icon inline size={40}>
        <Passport />
      </Icon>
      Passport
    </span>
    <span>
      <Icon inline size={40}>
        <Location />
      </Icon>
      Location
    </span>
  </>
)
