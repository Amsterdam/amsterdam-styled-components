import React from 'react'
import styled from '@datapunt/asc-core'
import ToggleFooterHeader from './ToggleFooterHeader'
import { Toggle } from '../../Toggle'
import { ShowHideTypes } from '../../../utils'

type Props = {
  title?: string
} & ShowHideTypes

const FooterToggle: React.FC<Props> = ({ title, children, ...otherProps }) => {
  const StyledFooterToggle = styled(Toggle)`
    margin-bottom: 24px;
  `
  return (
    <StyledFooterToggle
      ToggleHeader={ToggleFooterHeader}
      title={title}
      align="left"
      {...otherProps}
    >
      {children}
    </StyledFooterToggle>
  )
}

export default FooterToggle
