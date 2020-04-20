import React from 'react'
import styled from 'styled-components'
import Alert from './Alert'
import AlertStyle from './AlertStyle'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import { SocialButtons } from '../Button/Button.stories'
import Link from '../Link'

const Decorator = styled.div`
  ${AlertStyle} {
    margin-bottom: 10px;
  }
`

export default {
  title: 'Experimental/Composed/Alert',
  component: Alert,
  decorators: [
    (storyFn: () => React.ReactNode) => <Decorator>{storyFn()}</Decorator>,
  ],
}

export const Variants = () => (
  <>
    <Alert>Normal</Alert>
    <Alert level="attention">Attention</Alert>
    <Alert level="error">Error</Alert>
    <Alert compact>Normal compact</Alert>
    <Alert compact level="attention">
      Attention compact
    </Alert>
    <Alert compact level="error">
      Error compact
    </Alert>
  </>
)

export const CompactState = () => (
  <>
    <Alert
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, vitae."
      compact
    />
    <Alert
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, vitae."
      compact
      dismissible
      level="attention"
    />
    <Alert heading="Only heading with button" compact level="error" />
    <Alert
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, vitae."
      compact
      dismissible
      level="error"
      heading="With heading, content and button"
    />
  </>
)

export const NormalState = () => (
  <>
    <Alert
      level="normal"
      heading="With a heading and content"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, vitae."
    />
    <Alert
      dismissible
      level="attention"
      content="Without header, with close button"
    />
    <Alert
      dismissible
      level="error"
      heading="With a heading, content and close button"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, vitae."
    />
  </>
)

export const WithCustomChildren = () => (
  <>
    <Alert level="normal" dismissible>
      <Heading>With a normal heading and paragraph</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, vitae.
      </Paragraph>
    </Alert>
    <Alert level="normal">
      <SocialButtons />
    </Alert>
    <Alert level="attention" dismissible>
      <Paragraph>
        Just a looooong paragraph with close button: Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aut itaque necessitatibus officiis, quasi
        quia quisquam sit ut! Dolorum excepturi, inventore! Accusamus ad illo
        molestiae vel. Deleniti excepturi iusto neque quisquam!
      </Paragraph>
      <Link onDarkBackground href="/" variant="with-chevron">
        A link
      </Link>
    </Alert>
    <Alert level="error" dismissible>
      <Heading as="h3">A header</Heading>
      <Paragraph>With a paragraph</Paragraph>
      <Link onDarkBackground href="/" variant="with-chevron">
        A link
      </Link>
    </Alert>
  </>
)
