import { Location } from '@amsterdam/asc-assets'
import { Icon, themeColor } from '@amsterdam/asc-ui'
import React from 'react'

export default {
  title: 'UI/Icon',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          display: 'flex',
          maxWidth: 400,
          flexDirection: 'column',
          alignItems: 'flex-start',
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
export const CustomIconUrl = () => (
  <Icon
    inline
    size={70}
    iconUrl="https://cdn.xs4all.nl/content/_xs4all-themes/first-class/images/icons/usp-trophey_yellow_30.svg"
  />
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

export const Colors = () => (
  <>
    <div>
      <Icon size={40} color={themeColor('primary', 'main')}>
        <Location />
      </Icon>
      themeColor: primary, main
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} color={themeColor('tint', 'level3')}>
        <Location />
      </Icon>
      themeColor: tint, level3
    </div>
    <div style={{ paddingTop: 20 }}>
      <Icon size={40} color="hotpink">
        <Location />
      </Icon>
      hotpink (any color)
    </div>
  </>
)
