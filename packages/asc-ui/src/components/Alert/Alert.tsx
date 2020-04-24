import { Close } from '@datapunt/asc-assets'
import React, { useState } from 'react'
import CompactThemeProvider from '../../theme/CompactThemeProvider'
import { ButtonVariant } from '../Button/ButtonStyle'
import Paragraph from '../Paragraph'
import AlertStyle, {
  AlertHeading,
  CloseButton,
  CloseButtonWrapper,
  ContentWrapper,
  Props,
} from './AlertStyle'

const CLOSE_BUTTON_TITLE = 'Sluiten'

const Alert: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  heading,
  onDismiss,
  dismissible,
  compact,
  content,
  level,
  ...otherProps
}) => {
  const [open, setOpen] = useState(true)

  let variant: ButtonVariant = 'tertiary'

  if (level === 'error') {
    variant = 'secondary'
  } else if (level === 'attention') {
    variant = 'primary'
  }

  const handleOnDismiss = () => {
    setOpen(false)

    if (onDismiss) {
      onDismiss()
    }
  }

  return open ? (
    <AlertStyle
      {...{ compact, dismissible, level, ...otherProps }}
      tabIndex={0}
      role="alert"
      aria-live="polite"
    >
      <CompactThemeProvider>
        <ContentWrapper compact={compact}>
          {heading && (
            // @ts-ignore
            <AlertHeading forwardedAs="strong" styleAs={compact ? 'h5' : 'h3'}>
              {heading}
            </AlertHeading>
          )}
          {content && <Paragraph>{content}</Paragraph>}

          {children}
        </ContentWrapper>
        {dismissible && (
          <CloseButtonWrapper compact={compact}>
            <CloseButton
              title={CLOSE_BUTTON_TITLE}
              aria-label={CLOSE_BUTTON_TITLE}
              size={compact ? 24 : 30}
              variant={variant}
              onClick={handleOnDismiss}
              iconSize={compact ? 16 : 20}
              icon={<Close />}
            />
          </CloseButtonWrapper>
        )}
      </CompactThemeProvider>
    </AlertStyle>
  ) : null
}

export default Alert
