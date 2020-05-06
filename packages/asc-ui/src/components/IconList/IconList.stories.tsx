import React from 'react'
import * as Icons from '@datapunt/asc-assets'
import styled from 'styled-components'
import Icon from '../Icon/Icon'

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

const allIcons = Object.values(Icons)
const allLabels = Object.keys(Icons)
export const IconList = () => (
  <>
    {allIcons.map((ListIcon, key) => (
      <IconWrapper key={allLabels[key]} style={{}}>
        <Icon size={80} inline>
          <ListIcon />
        </Icon>
        <div>{allLabels[key]}</div>
      </IconWrapper>
    ))}
  </>
)
