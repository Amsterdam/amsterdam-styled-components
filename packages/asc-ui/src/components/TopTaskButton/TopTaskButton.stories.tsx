import { Location, Passport } from '@datapunt/asc-assets'
import React from 'react'
import Readme from './README.md'
import TopTaskButton from './TopTaskButton'

export default {
  title: 'Experimental/Atoms/TopTaskButton',
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

export const WithIcon = () => (
  <TopTaskButton
    href="https://amsterdam.nl"
    icon={Location}
    title="City hall: locations and opening hours"
    style={{ maxWidth: 220 }}
  />
)

export const WithoutIcon = () => (
  <TopTaskButton
    href="https://amsterdam.nl"
    title="City hall: locations and opening hour"
    style={{ maxWidth: 220 }}
  />
)

export const WithText = () => (
  <TopTaskButton
    href="https://amsterdam.nl"
    title="City Hall West"
    text="Bos en Lommerplein 250"
    style={{ maxWidth: 220 }}
  />
)

export const OnDarkBackground = () => (
  <div style={{ backgroundColor: '#004699', padding: '40px 80px' }}>
    <TopTaskButton
      href="https://amsterdam.nl"
      target="_blank"
      icon={Passport}
      title="City hall: locations and opening hour"
      onDarkBackground
    />
  </div>
)
