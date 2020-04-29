import React, { useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import useFocus from './useFocus'

export default {
  title: 'Utilities/Hooks/useFocus',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
    ),
  ],
}

export const FocusOnRender = () => {
  const ref = useRef<HTMLButtonElement>()

  useFocus(ref)

  return <Button ref={ref}>I will focus on render</Button>
}

export const FocusWithTimeout = () => {
  const [focussed, setFocussed] = useState(false)
  const ref = useRef<HTMLButtonElement>()

  useEffect(() => {
    const timer = setTimeout(() => setFocussed(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useFocus(ref, focussed)

  return <Button ref={ref}>I will in focus in three seconds</Button>
}
