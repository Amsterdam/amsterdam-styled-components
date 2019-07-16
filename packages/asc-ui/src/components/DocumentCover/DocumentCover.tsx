import React from 'react'
import { Download } from '@datapunt/asc-assets'
import DocumentCoverStyle from './DocumentCoverStyle'
import Button from '../Button'
import Image from '../Image'
import DocumentCoverContent from './DocumentCoverContent'
import Typography from '../Typography'
import Icon from '../Icon'

interface Props {
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
  <DocumentCoverStyle {...otherProps}>
    <DocumentCoverContent>
      <Image src={imageSrc} alt=""></Image>
      <Button color="primary" onClick={onClick}>
        <Icon size={20} color="bright">
          <Download />
        </Icon>
        <Typography as="span" color="bright">
          {description}
        </Typography>
      </Button>
    </DocumentCoverContent>
  </DocumentCoverStyle>
)

export default Downloader
