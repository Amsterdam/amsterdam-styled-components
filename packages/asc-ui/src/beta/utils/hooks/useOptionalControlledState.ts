import { useEffect, useState } from 'react'

/**
 * Sometimes we want the user to control and watch the isOpen / active state of a component

 * @param [controlledBoolean] The boolean to set the (initial) state
 * @param [onSetBoolean] Function This will be called as soon as the state is changed
 */
const useOptionalControlledState = (
  controlledBoolean?: boolean,
  onSetBoolean?: (state: boolean) => void,
) => {
  const [boolean, setBoolean] = useState(controlledBoolean || false)

  useEffect(() => {
    if (typeof controlledBoolean !== 'undefined') {
      setBoolean(controlledBoolean)
    }
  }, [controlledBoolean, setBoolean])

  useEffect(() => {
    if (onSetBoolean) {
      onSetBoolean(boolean)
    }
  }, [boolean, onSetBoolean])

  return [boolean, setBoolean] as const
}

export default useOptionalControlledState
