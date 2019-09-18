import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import Multiline from './Multiline'

const backgroundColor = '#E6E6E6'

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

const Div = styled.div`
  width: 400px;
  margin: 20px;
`

storiesOf('Atoms/Multiline', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => (
    <>
      <Div>
        <Multiline
          lineHeight={20}
          lineCount={4}
          backgroundColor={backgroundColor}
        >
          {loremIpsum}
        </Multiline>
      </Div>
      <Div>
        <Multiline
          styleAs="h4"
          lineHeight={25}
          lineCount={3}
          backgroundColor={backgroundColor}
        >
          {loremIpsum}
        </Multiline>
      </Div>
    </>
  ))
