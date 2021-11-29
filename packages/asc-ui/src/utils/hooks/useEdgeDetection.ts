import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

export interface EdgeDetectionTypes {
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}

const defaultBoundaries: EdgeDetectionTypes = {
  top: true,
  right: true,
  bottom: true,
  left: true,
}

export default <T extends HTMLElement = HTMLElement>(
  dependencies: ReadonlyArray<any> = [],
  boundaries: EdgeDetectionTypes = defaultBoundaries,
): [RefObject<T>, EdgeDetectionTypes] => {
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
        top: boundaries.top ? bounding.top < 0 : false,
        right: boundaries.right
          ? bounding.right > (innerWidth || documentElement.clientWidth)
          : false,
        bottom: boundaries.bottom
          ? bounding.bottom > (innerHeight || documentElement.clientHeight)
          : false,
        left: boundaries.left ? bounding.left < 0 : false,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return [ref, edgeDetection]
}
