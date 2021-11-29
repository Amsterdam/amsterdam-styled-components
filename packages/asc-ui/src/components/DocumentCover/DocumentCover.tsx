import { Download } from '@amsterdam/asc-assets'
import type { FunctionComponent, MouseEvent } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Image from '../Image'
import DocumentCoverContent from './DocumentCoverContent'
import DocumentCoverStyle from './DocumentCoverStyle'

interface Props {
  imageSrc: string
  onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  description: string
  alt?: string
}

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
`

const DocumentCoverContentStyle: FunctionComponent<Props> = ({
  imageSrc,
  onClick,
  description,
  alt = '',
  ...otherProps
}) => (
  <DocumentCoverStyle {...otherProps}>
    <DocumentCoverContent>
      <Image src={imageSrc} alt={alt} />
      <ButtonStyled variant="primary" onClick={onClick} iconLeft={<Download />}>
        {description}
      </ButtonStyled>
    </DocumentCoverContent>
  </DocumentCoverStyle>
)

export default DocumentCoverContentStyle
