import React from 'react'
import styled from '@datapunt/asc-core'
import ToggleFooterHeader from './ToggleFooterHeader'
import { Toggle } from '../../Toggle'
import { ShowHideTypes, themeSpacing } from '../../../utils'

type Props = {
  title?: string
} & ShowHideTypes

const StyledFooterToggle = styled(Toggle)`
  margin-bottom: ${themeSpacing(6)};
`

const FooterToggle: React.FC<Props> = ({ title, children, ...otherProps }) => (
  <StyledFooterToggle
    ToggleHandler={ToggleFooterHeader}
    title={title}
    align="left"
    {...otherProps}
  >
    {children}
  </StyledFooterToggle>
)

export default FooterToggle
