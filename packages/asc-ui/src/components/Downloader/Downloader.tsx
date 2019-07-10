import React from 'react'
import { Download } from '@datapunt/asc-assets'
import DownloaderStyle, { DownloaderStyleProps } from './DownloaderStyle'
import { Row, Column } from '../Grid'
import Button from '../Button'
import Image from '../Image'
import DownloaderContent from './DownloaderContent'

interface Props extends DownloaderStyleProps {
  imageSrc: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  description: string
}

const Downloader: React.FC<Props> = ({
  imageSrc,
  onClick,
  description,
  ...otherProps
}) => (
  <DownloaderStyle {...otherProps}>
    <Row>
      <Column span={{ small: 1, medium: 4, big: 6, large: 12, xLarge: 12 }}>
        <Column
          span={{ small: 1, medium: 2, big: 4, large: 10, xLarge: 10 }}
          push={{ small: 0, medium: 1, big: 1, large: 1, xLarge: 1 }}
        >
          <DownloaderContent>
            <Image src={imageSrc} alt=""></Image>
            <Button color="primary" onClick={onClick}>
              <Download />
              {description}
            </Button>
          </DownloaderContent>
        </Column>
      </Column>
    </Row>
  </DownloaderStyle>
)

export default Downloader
