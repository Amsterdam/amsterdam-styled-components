import React from 'react'

import { ChevronDown } from '@datapunt/asc-assets'
import AccordionStyle from './AccordionStyle'
import Icon from '../Icon'
import { ToggleHandlerProps } from '../Toggle'

export type Props = ToggleHandlerProps

const Accordion: React.FC<Props> = ({ children, ...otherProps }) => (
  <AccordionStyle $as="h4" {...otherProps}>
    {children}
    <Icon inline size={14} color="primary">
      <ChevronDown />
    </Icon>
  </AccordionStyle>
)

Accordion.defaultProps = {}

export default Accordion
