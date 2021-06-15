import { ChevronRight, Download, ExternalLink } from '@amsterdam/asc-assets'
import { FunctionComponent } from 'react'
import { StyledProps } from 'styled-components'
import { deprecatedWarning } from '../../utils'
import LinkStyle, {
  ChevronIcon,
  LinkContent,
  Props as LinkStyleProps,
  RightIcon,
} from './LinkStyle'

export type Props = LinkStyleProps & StyledProps<any>

const Link: FunctionComponent<Props> = ({
  children,
  variant,
  as,
  icon,
  inList,
  ...otherProps
}) => {
  if (variant === 'with-chevron') {
    deprecatedWarning(
      'Please note that the `with-chevron` variant will be deprecated soon, please use the `inList` prop',
    )
  }

  if (icon && typeof icon !== 'string') {
    deprecatedWarning(
      'Please note that passing a component to prop `icon` will be deprecated soon. If you need to use a custom Icon, just pass it as a child. If your link is a download or external link, you can pass `icon="download"` or `icon="external"`',
    )
  }
  return (
    <LinkStyle {...otherProps} variant={variant} forwardedAs={as}>
      {(inList || variant === 'with-chevron') && (
        <ChevronIcon size={12}>
          <ChevronRight />
        </ChevronIcon>
      )}
      {/* Wrap the content in a span if it has a chevron, as this will fix overflow issues in IE11 */}
      {inList || variant === 'with-chevron' ? (
        <LinkContent>{children}</LinkContent>
      ) : (
        children
      )}
      {(icon === 'external' || icon === 'download') && (
        <RightIcon size={14}>
          {icon === 'external' && <ExternalLink />}
          {icon === 'download' && <Download />}
        </RightIcon>
      )}
      {icon && typeof icon !== 'string' && icon}
    </LinkStyle>
  )
}

Link.defaultProps = {
  as: 'a',
}

export default Link
