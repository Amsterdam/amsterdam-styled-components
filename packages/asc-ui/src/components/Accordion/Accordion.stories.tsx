import React, { useEffect, useState } from 'react'
import { FacebookPadded } from '@datapunt/asc-assets'
import Accordion from './Accordion'
import Paragraph from '../Paragraph'
import AccordionWrapper from './AccordionWrapper'
import Icon from '../Icon'

export default {
  title: 'Atoms/Accordion',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const SingleAccordionWithParagraph = () => (
  <Accordion title="Only a paragraph" id="one">
    <Paragraph gutterBottom={0}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus hic
      incidunt iure labore natus odio pariatur qui sint, voluptas!
    </Paragraph>
  </Accordion>
)

export const SingleAccordionWithCustomContent = () => (
  <Accordion title="With custom content" id="one">
    <Icon padding={4} size={48}>
      <FacebookPadded />
    </Icon>
  </Accordion>
)

export const SingleAccordionWithAHugeTitle = () => (
  <Accordion
    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consequatur id, ipsum, libero minima praesentium qui recusandae repellat, repellendus reprehenderit vel? Amet beatae consequatur debitis, ex, fuga hic id itaque laborum neque odio officia optio perferendis tempore tenetur totam."
    id="one"
  >
    <Paragraph gutterBottom={0}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus hic
      incidunt iure labore natus odio pariatur qui sint, voluptas!
    </Paragraph>
  </Accordion>
)

export const SingleAccordionWithAControlledState = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Accordion
      title="I open after 3 seconds..."
      id="one"
      isOpen={open}
      onToggle={(state) => {
        // eslint-disable-next-line no-console
        console.log('Did I isOpen...?', state)
      }}
    >
      <Paragraph gutterBottom={0}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
        hic incidunt iure labore natus odio pariatur qui sint, voluptas!
      </Paragraph>
    </Accordion>
  )
}

export const MultipleAccordionsWithArrowKeysSupport = () => (
  <AccordionWrapper>
    <Accordion title="Example one" id="one">
      <Paragraph gutterBottom={0}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
        hic incidunt iure labore natus odio pariatur qui sint, voluptas!
      </Paragraph>
    </Accordion>
    <Accordion title="Example two" id="two">
      <Paragraph gutterBottom={0}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
        hic incidunt iure labore natus odio pariatur qui sint, voluptas!
      </Paragraph>
    </Accordion>
    <Accordion title="Example three" id="three">
      <Paragraph gutterBottom={0}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
        hic incidunt iure labore natus odio pariatur qui sint, voluptas!
      </Paragraph>
    </Accordion>
  </AccordionWrapper>
)
