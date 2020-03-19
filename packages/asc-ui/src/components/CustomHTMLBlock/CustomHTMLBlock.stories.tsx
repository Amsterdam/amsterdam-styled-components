import React from 'react'
import CustomHTMLBlockStyle from './CustomHTMLBlockStyle'
import CustomHTMLBlock from './CustomHTMLBlock'

export default {
  title: 'Experimental/Atoms/CustomHTMLBlock',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const Default = () => (
  <CustomHTMLBlockStyle>
    <h1>Hello</h1>
    <p>I am a paragraph</p>
  </CustomHTMLBlockStyle>
)

export const WithDangerouslySetInnerHtml = () => (
  <CustomHTMLBlockStyle
    dangerouslySetInnerHTML={{
      __html: `
        <h1>Hello</h1>
        <p>I am a paragraph</p>
        `,
    }}
  />
)

export const WithBody = () => (
  <CustomHTMLBlock
    body={`
        <h1>Hello</h1>
        <p>I am a paragraph</p>
      `}
  />
)
