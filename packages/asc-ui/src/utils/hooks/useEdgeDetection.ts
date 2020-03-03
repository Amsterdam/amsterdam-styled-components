import { RefObject, useEffect, useRef, useState } from 'react'

export type EdgeDetectionTypes = {
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}

export default <T extends HTMLElement = HTMLElement>(
  dependencies: ReadonlyArray<any> = [],
) => {
  const initialState: EdgeDetectionTypes = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  }
  const [edgeDetection, updateEdgeDetection] = useState(initialState)

  const ref = useRef<T>(null)

  useEffect(() => {
    if (ref && ref.current) {
      const bounding = ref.current.getBoundingClientRect()
      const { innerWidth, innerHeight, document } = window
      const { documentElement } = document

      updateEdgeDetection({
        top: bounding.top < 0,
        right: bounding.right > (innerWidth || documentElement.clientWidth),
        bottom: bounding.bottom > (innerHeight || documentElement.clientHeight),
        left: bounding.left < 0,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return [ref, edgeDetection] as [RefObject<T>, EdgeDetectionTypes]
}
