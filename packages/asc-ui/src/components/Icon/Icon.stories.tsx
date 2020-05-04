import { Location, Passport } from '@datapunt/asc-assets'
import React from 'react'
import Readme from './README.md'
import Icon from './Icon'

export default {
  title: 'Experimental/Atoms/Icon',
  parameters: {
    notes: Readme,
  },
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          display: 'flex',
          maxWidth: 400,
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '40px 10px',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
}

export const Default = () => (
  <Icon>
    <Location />
  </Icon>
)

export const InlineFlex = () => (
  <Icon inline>
    <Location />
  </Icon>
)

export const Sizes = () => (
  <>
    <Icon size={14}>
      <Location />
    </Icon>
    Small
    <div style={{ paddingTop: 20 }}>
      <Icon size={20}>
        <Location />
      </Icon>
      Medium
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={32}>
        <Location />
      </Icon>
      Large
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40}>
        <Location />
      </Icon>
      ExtraLarge
    </div>
  </>
)

export const ColorError = () => (
  <>
    <Icon inline size={40} color="error">
      <Passport />
    </Icon>
  </>
)
