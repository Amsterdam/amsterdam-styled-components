import * as Icons from '@datapunt/asc-assets'
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

let CustomIcon
export const AllIcons = () => (
  <>
    {Object.entries(Icons).map((IconObject) => (
      <span key={IconObject[1]}>
        {(CustomIcon = IconObject[1])}
        <Icon size={60} inline>
          <CustomIcon />
        </Icon>
        {IconObject[0]}
      </span>
    ))}
  </>
)
