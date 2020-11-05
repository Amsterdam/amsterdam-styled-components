import React, { FunctionComponent, ReactNode } from 'react'
import {
  ViewerContainerItem,
  ViewerContainerWrapper,
} from './ViewerContainerStyle'

type Props = {
  topLeft?: ReactNode
  topRight?: ReactNode
  bottomLeft?: ReactNode
  bottomRight?: ReactNode
  metaData?: Array<string>
}

const ViewerContainer: FunctionComponent<Props> = ({
  bottomLeft,
  topLeft,
  topRight,
  bottomRight,
  metaData,
  ...otherProps
}) => {
  return (
    <ViewerContainerWrapper {...otherProps}>
      <ViewerContainerItem position="top-left">{topLeft}</ViewerContainerItem>
      <ViewerContainerItem position="top-right">{topRight}</ViewerContainerItem>
      <ViewerContainerItem position="bottom-left">
        {bottomLeft}
      </ViewerContainerItem>
      <ViewerContainerItem position="bottom-right">
        {bottomRight}
        {metaData && (
          <div>
            {metaData.map(
              (string) =>
                string && (
                  <div key={string}>
                    <span>{string}</span>
                  </div>
                ),
            )}
          </div>
        )}
      </ViewerContainerItem>
    </ViewerContainerWrapper>
  )
}

export default ViewerContainer
