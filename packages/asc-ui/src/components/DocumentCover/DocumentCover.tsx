import { Download } from '@amsterdam/asc-assets'
import type { MouseEvent } from 'react'
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

function DocumentCoverContentStyle({
  imageSrc,
  onClick,
  description,
  alt = '',
  ...otherProps
}: Props) {
  return (
    <DocumentCoverStyle {...otherProps}>
      <DocumentCoverContent>
        <Image src={imageSrc} alt={alt} />
        <ButtonStyled
          variant="primary"
          onClick={onClick}
          iconLeft={<Download />}
        >
          {description}
        </ButtonStyled>
      </DocumentCoverContent>
    </DocumentCoverStyle>
  )
}

export default DocumentCoverContentStyle
