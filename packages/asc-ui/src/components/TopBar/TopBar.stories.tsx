import styled from '@datapunt/asc-core'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Close } from '@datapunt/asc-assets'
import TopBar from './TopBar'
import Heading from '../Heading'
import Button from '../Button'
import Icon from '../Icon'

const backgroundColor = '#E6E6E6'

const HeadingStyled = styled(Heading)`
  flex-grow: 1;
`

export default {
  title: 'Experimental/Atoms/TopBar',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultState = () => (
  <TopBar>
    <HeadingStyled as="h4">
      TopBar
      <Button
        size={30}
        variant="blank"
        aria-label="Close"
        onClick={action('close')}
      >
        <Icon>
          <Close />
        </Icon>
      </Button>
    </HeadingStyled>
  </TopBar>
)

export const WithBackgroundColor = () => (
  <TopBar backgroundColor={backgroundColor}>
    <HeadingStyled as="h4">
      TopBar - with backgroundColor property set
      <Button
        size={30}
        variant="blank"
        aria-label="Close"
        onClick={action('close')}
      >
        <Icon>
          <Close />
        </Icon>
      </Button>
    </HeadingStyled>
  </TopBar>
)
