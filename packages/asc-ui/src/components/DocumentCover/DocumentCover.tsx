import React from 'react'
import styled from '@datapunt/asc-core'
import { Download } from '@datapunt/asc-assets'
import DocumentCoverStyle from './DocumentCoverStyle'
import Button from '../Button'
import Image from '../Image'
import DocumentCoverContent from './DocumentCoverContent'
import Icon from '../Icon'

interface Props {
  imageSrc: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  description: string
}

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
`

const DocumentCoverContentStyle: React.FC<Props> = ({
  imageSrc,
  onClick,
  description,
  ...otherProps
}) => (
  <DocumentCoverStyle {...otherProps}>
    <DocumentCoverContent>
      <Image src={imageSrc} alt="" />
      <ButtonStyled variant="primary" onClick={onClick} hasIconLeft>
        <Icon size={20} color="bright">
          <Download />
        </Icon>
        {description}
      </ButtonStyled>
    </DocumentCoverContent>
  </DocumentCoverStyle>
)

export default DocumentCoverContentStyle
