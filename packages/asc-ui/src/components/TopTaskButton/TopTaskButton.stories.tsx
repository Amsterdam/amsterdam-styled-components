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
    text="Stadsloket: locaties en openingstijden"
    style={{ maxWidth: 220 }}
  />
)

export const WithoutIcon = () => (
  <TopTaskButton
    href="https://amsterdam.nl"
    text="Stadsloket: locaties en openingstijden"
    style={{ maxWidth: 220 }}
  />
)

export const OnDarkBackground = () => (
  <div style={{ backgroundColor: '#004699', padding: '40px 80px' }}>
    <TopTaskButton
      href="https://amsterdam.nl"
      target="_blank"
      icon={Passport}
      text="Stadsloket: locaties en openingstijden"
      onDarkBackground
    />
  </div>
)
