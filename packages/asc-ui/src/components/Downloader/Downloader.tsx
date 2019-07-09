import React from 'react'
import { Download } from '@datapunt/asc-assets'
import DownloaderStyle, { DownloaderStyleProps } from './DownloaderStyle'
import { Row, Column } from '../Grid'
import Button from '../Button'
import Image from '../Image'

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
    <Row debug>
      <Column debug span={5}>
        <Column debug span={3} push={1}>
          <Image src={imageSrc} alt=""></Image>
          <Button color="primary" onClick={onClick}>
            <Download />
            {description}
          </Button>
        </Column>
      </Column>
    </Row>
  </DownloaderStyle>
)

export default Downloader
