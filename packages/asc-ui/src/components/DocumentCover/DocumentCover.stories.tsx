import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DocumentCover from './DocumentCover'

const DocumentCoverComponent: React.FC<{}> = () => (
  <>
    <DocumentCover
      imageSrc="http://lorempixel.com/400/800/sports/8/"
      onClick={action('click')}
      description="Download PDF (12MB)"
    />
  </>
)

storiesOf('Atoms/DocumentCover', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => <DocumentCoverComponent />)
