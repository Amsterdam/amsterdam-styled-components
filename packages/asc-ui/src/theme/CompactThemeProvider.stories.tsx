import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import CompactThemeProvider from './CompactThemeProvider'

storiesOf('Atoms/Typography/CompactThemeProvider', module).add(
  'without theme ',
  () => (
    <>
      <div>
        <Heading $as="h3">
          I don&apos;t have the CompactThemeProvider applyed.
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          deleniti dicta doloremque eveniet explicabo id ipsum omnis placeat
          rerum suscipit.
        </Paragraph>
      </div>
      <div>
        <CompactThemeProvider>
          <Heading $as="h3">I have the CompactThemeProvider applyed.</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            deleniti dicta doloremque eveniet explicabo id ipsum omnis placeat
            rerum suscipit.
          </Paragraph>
        </CompactThemeProvider>
      </div>
    </>
  ),
)
