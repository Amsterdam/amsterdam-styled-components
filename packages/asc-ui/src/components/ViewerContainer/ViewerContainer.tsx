import React from 'react'
import {
  ViewerContainerItem,
  ViewerContainerWrapper,
} from './ViewerContainerStyle'

type Props = {
  topLeft?: React.ReactNode
  topRight?: React.ReactNode
  bottomLeft?: React.ReactNode
  bottomRight?: React.ReactNode
  metaData?: Array<string>
}

const ViewerContainer: React.FC<Props> = ({
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
          <div className="viewer-controls__meta">
            {metaData.map(
              string =>
                string && (
                  <div key={string} className="viewer-controls__meta__item">
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
