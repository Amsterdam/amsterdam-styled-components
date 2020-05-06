import { Location, Passport } from '@datapunt/asc-assets'
import React from 'react'
import Icon from './Icon'

export default {
  title: 'Experimental/Atoms/Icon',
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
    <div style={{ paddingTop: 20 }}>
      <Icon size={68}>
        <Location />
      </Icon>
      68px (any number)
    </div>
  </>
)

export const Rotation = () => (
  <>
    <Icon size={40}>
      <Location />
    </Icon>
    0 deg
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} rotate={90}>
        <Location />
      </Icon>
      90 deg
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} rotate={180}>
        <Location />
      </Icon>
      180 deg
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} rotate={270}>
        <Location />
      </Icon>
      270 deg
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} rotate={68}>
        <Location />
      </Icon>
      68 deg (any number)
    </div>
  </>
)

// primary" | "secondary" | "bright" | "tint" | "none" | "support" | "error" | "default"
export const Colors = () => (
  <>
    <div>
      <Icon size={40} color="primary">
        <Location />
      </Icon>
      Primary
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} color="secondary">
        <Location />
      </Icon>
      Secondary
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} color="tint">
        <Location />
      </Icon>
      Tint
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} color="none">
        <Location />
      </Icon>
      None
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} color="support">
        <Location />
      </Icon>
      support
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} color="error">
        <Location />
      </Icon>
      error
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} color="default">
        <Location />
      </Icon>
      default
    </div>
  </>
)
