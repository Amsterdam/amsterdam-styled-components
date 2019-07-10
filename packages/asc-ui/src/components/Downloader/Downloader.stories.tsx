import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Downloader from './Downloader'

const DownloaderComponent: React.FC<{}> = () => (
  <>
    <Downloader
      imageSrc="https://acc.cms.data.amsterdam.nl/sites/default/files/images/2019-factsheet-jeugdwerkloosheid-2014-2018.png"
      onClick={action('click')}
      description="Download PDF (12MB)"
    ></Downloader>
  </>
)

storiesOf('Atoms/Downloader', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => <DownloaderComponent />)
