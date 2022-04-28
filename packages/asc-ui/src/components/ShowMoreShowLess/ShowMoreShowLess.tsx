import { Enlarge, Minimise } from '@amsterdam/asc-assets'
import type { HTMLAttributes } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ButtonProps } from '../Button/Button'
import Button from '../Button/Button'
import type { ShowMoreShowLessProps } from './ShowMoreShowLessStyle'
import ShowMoreShowLessStyle from './ShowMoreShowLessStyle'

function ShowMoreShowLess({
  children,
  maxHeight = '300px',
  showMoreText = 'Toon meer',
  showLessText = 'Toon minder',
  ...otherProps
}: ShowMoreShowLessProps & HTMLAttributes<HTMLElement>) {
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
      {showMoreShowLess &&
        (!isOpen ? (
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
        ))}
    </>
  )
}

export default ShowMoreShowLess
