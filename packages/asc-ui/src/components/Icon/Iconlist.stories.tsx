import React from 'react'
import * as Icons from '@datapunt/asc-assets'
import styled from 'styled-components'
import Icon from './Icon'

const IconWrapper = styled.span`
  display: inline-block;
  width: 150px;
  height: 150px;
`

export default {
  title: 'Experimental/Atoms/IconList',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          display: 'inline-block',
          padding: '40px 10px',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
}

let CustomIcon
export const IconList = () => (
  <>
    {Object.entries(Icons).map((IconObject) => (
      <IconWrapper key={IconObject[1]} style={{}}>
        {(CustomIcon = IconObject[1])}
        <Icon size={80} inline>
          <CustomIcon />
        </Icon>
        <div>{IconObject[0]}</div>
      </IconWrapper>
    ))}
  </>
)
