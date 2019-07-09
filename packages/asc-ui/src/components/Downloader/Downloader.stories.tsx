import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Downloader from './Downloader'

const DownloaderComponent: React.FC<{}> = () => (
  <>
    <Downloader
      imageSrc="https://data.amsterdam.nl/assets/images/amsterdam-maps.png"
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
