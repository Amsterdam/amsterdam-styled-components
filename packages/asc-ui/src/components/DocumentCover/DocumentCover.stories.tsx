import * as React from 'react'
import { action } from '@storybook/addon-actions'
import DocumentCover from './DocumentCover'

export default {
  title: 'Atoms/DocumentCover',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultState = () => (
  <DocumentCover
    imageSrc="http://lorempixel.com/400/800/sports/8/"
    onClick={action('click')}
    description="Download PDF (12MB)"
  />
)
