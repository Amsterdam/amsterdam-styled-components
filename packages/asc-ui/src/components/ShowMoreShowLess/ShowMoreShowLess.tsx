import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Enlarge, Minimise } from '@datapunt/asc-assets'
import ShowMoreShowLessStyle, {
  ShowMoreShowLessProps,
} from './ShowMoreShowLessStyle'
import Button, { Props as ButtonProps } from '../Button/Button'

const ShowMoreShowLess: React.FC<
  ShowMoreShowLessProps & React.HTMLAttributes<HTMLElement>
> = ({
  children,
  maxHeight = '300px',
  showMoreText = 'Toon meer',
  showLessText = 'Toon minder',
  ...otherProps
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [showMoreShowLess, setShowMoreShowLess] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (el) {
      setShowMoreShowLess(el.clientHeight < el.scrollHeight)
    }
  }, [])

  const sharedButtonProps = useMemo<ButtonProps>(
    () => ({
      'aria-expanded': isOpen,
      type: 'button',
      variant: 'textButton',
      iconSize: 12,
      onClick: () => setIsOpen(!isOpen),
    }),
    [isOpen],
  )

  return (
    <>
      <ShowMoreShowLessStyle
        {...{ maxHeight, showMoreShowLess, isOpen, ref, ...otherProps }}
      >
        {children}
      </ShowMoreShowLessStyle>
      {showMoreShowLess && (
        <>
          {!isOpen ? (
            <Button
              title={showMoreText}
              iconLeft={<Enlarge />}
              {...sharedButtonProps}
            >
              {showMoreText}
            </Button>
          ) : (
            <Button
              title={showLessText}
              iconLeft={<Minimise />}
              {...sharedButtonProps}
            >
              {showLessText}
            </Button>
          )}
        </>
      )}
    </>
  )
}

export default ShowMoreShowLess
