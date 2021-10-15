import * as Icons from '@amsterdam/asc-assets'
import { Icon } from '@amsterdam/asc-ui'
import styled from 'styled-components'
import { Meta } from '@storybook/react'

const IconWrapper = styled.span`
  width: 150px;
  height: 180px;
`

const StyledLabel = styled.div`
  margin-top: 8px;
`

export default {
  title: 'Assets/Icons',
  decorators: [
    (StoryComponent) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '100%',
        }}
      >
        <StoryComponent />
      </div>
    ),
  ],
} as Meta

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
