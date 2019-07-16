import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DocumentCover from './DocumentCover'

const DocumentCoverComponent: React.FC<{}> = () => (
  <>
    <DocumentCover
      imageSrc="https://acc.cms.data.amsterdam.nl/sites/default/files/images/2019-factsheet-jeugdwerkloosheid-2014-2018.png"
      onClick={action('click')}
      description="Download PDF (12MB)"
    ></DocumentCover>
  </>
)

storiesOf('Atoms/DocumentCover', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => <DocumentCoverComponent />)
