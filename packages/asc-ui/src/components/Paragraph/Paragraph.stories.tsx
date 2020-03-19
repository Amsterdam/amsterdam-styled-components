import * as React from 'react'
import Paragraph from './Paragraph'
import CompactThemeProvider from '../../theme/CompactThemeProvider'

export default {
  title: 'Experimental/Atoms/Typography/Paragraph',
}

export const DefaultStyle = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti
    dicta doloremque eveniet explicabo id ipsum omnis placeat rerum suscipit.
  </Paragraph>
)

export const StrongStyleIntroText = () => (
  <Paragraph strong>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti
    dicta doloremque eveniet explicabo id ipsum omnis placeat rerum suscipit.
  </Paragraph>
)

StrongStyleIntroText.story = {
  name: 'Strong Style / Intro Text',
}

export const CompactParagraph = () => (
  <CompactThemeProvider>
    <div style={{ width: '300px' }}>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        deleniti dicta doloremque eveniet explicabo id ipsum omnis placeat rerum
        suscipit.
      </Paragraph>
    </div>
  </CompactThemeProvider>
)
