import React from 'react'
import styled from 'styled-components'
import * as Icons from '@datapunt/asc-assets'
import { Icon } from '@datapunt/asc-ui'

const IconWrapper = styled.span`
  width: 150px;
  height: 180px;
`

const StyledLabel = styled.div`
  margin-top: 8px;
`

export default {
  title: 'UI/IconList',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '40px 10px',
          height: '100%',
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
        <StyledLabel>{allLabels[key]}</StyledLabel>
      </IconWrapper>
    ))}
  </>
)
