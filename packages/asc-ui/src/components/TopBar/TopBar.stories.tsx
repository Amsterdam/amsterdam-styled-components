import styled from '@datapunt/asc-core'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
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

storiesOf('Atoms/TopBar', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => (
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
  ))
  .add('with background color', () => (
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
  ))
