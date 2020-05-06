import React from 'react'
import * as Icons from '@datapunt/asc-assets'
import styled from 'styled-components'
import Icon from './Icon'

const IconWrapper = styled.span`
  display: inline-block;
  width: 170px;
  height: 170px;
`
const IconName = styled.span`
  display: block;
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
        <Icon size={100} inline>
          <CustomIcon />
        </Icon>
        <IconName>{IconObject[0]}</IconName>
      </IconWrapper>
    ))}
  </>
)
