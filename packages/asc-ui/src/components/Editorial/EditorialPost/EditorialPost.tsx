import type { FunctionComponent, HTMLAttributes } from 'react'
import BackgroundImage from '../../BackgroundImage'
import EditorialPostStyle from './EditorialPostStyle'

export type Props = {
  StyledComponent?: any
  image?: string
} & HTMLAttributes<HTMLElement>

const EditorialPost: FunctionComponent<Props> = ({
  children,
  image,
  StyledComponent,
  ...otherProps
}) => (
  <StyledComponent hasImage={!!image} {...otherProps}>
    {image && (
      <BackgroundImage
        aspectRatio={44}
        size="cover"
        position="top center"
        source={image}
      />
    )}
    {children}
  </StyledComponent>
)

EditorialPost.defaultProps = {
  StyledComponent: EditorialPostStyle,
}

export default EditorialPost
