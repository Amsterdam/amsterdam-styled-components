import { useEffect, useState } from 'react'

/**
 * Sometimes we want the user to control and watch the open / active state of a component

 * @param [controlledBoolean] The boolean to set the (initial) state
 * @param [onSetBoolean] Function This will be called as soon as the state is changed
 */
const useOptionalControlledState = (
  controlledBoolean?: boolean,
  onSetBoolean?: Function,
) => {
  const [boolean, setBoolean] = useState(controlledBoolean || false)

  useEffect(() => {
    if (typeof controlledBoolean !== 'undefined') {
      setBoolean(controlledBoolean)
    }
  }, [controlledBoolean])

  useEffect(() => {
    if (onSetBoolean) {
      onSetBoolean(boolean)
    }
  }, [boolean])

  return [boolean, setBoolean] as const
}

export default useOptionalControlledState
