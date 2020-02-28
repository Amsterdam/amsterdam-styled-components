import React, { useState } from 'react'
import { Close } from '@datapunt/asc-assets'
import AlertStyle, {
  Props,
  CloseButton,
  CloseButtonWrapper,
  ContentWrapper,
} from './AlertStyle'
import Heading from '../Heading'
import CompactThemeProvider from '../../theme/CompactThemeProvider'
import Paragraph from '../Paragraph'
import { ButtonVariants } from '../Button/ButtonStyle'

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

  let variant: keyof typeof ButtonVariants = 'tertiary'

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
            <Heading forwardedAs="strong" styleAs={compact ? 'h5' : 'h3'}>
              {heading}
            </Heading>
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
