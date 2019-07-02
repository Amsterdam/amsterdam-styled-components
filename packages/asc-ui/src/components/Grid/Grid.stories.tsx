import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Column from './Column'
import Row from './Row'

const ColumnStory: React.FC<{}> = () => (
  <>
    <br />
    <br />
    <Row debug>
      <Column
        order={{ small: 2, medium: 1, big: 1, large: 1 }}
        span={{ small: 4, medium: 4, big: 2, large: 2 }}
      >
        <pre>Left sidebar</pre>
      </Column>
      <Column
        order={{ small: 1, medium: 3, big: 2, large: 2 }}
        span={{ small: 4, medium: 8, big: 8, large: 12 }}
        debug
      >
        <pre>Center column</pre>
      </Column>
      <Column
        order={{ small: 3, medium: 2, big: 3, large: 3 }}
        span={{ small: 4, medium: 4, big: 2, large: 4 }}
        debug
      >
        <pre>Right sidebar</pre>
      </Column>
    </Row>
  </>
)

const NestedColumnsStory: React.FC<{}> = () => (
  <>
    <br />
    <br />
    <Row debug>
      <Column span={{ small: 4, medium: 4, big: 2, large: 2 }}>
        <pre>Left sidebar</pre>
      </Column>

      <Column span={{ small: 4, medium: 8, big: 8, large: 12 }}>
        <Column span={{ small: 2, medium: 4, big: 4, large: 6 }} debug>
          <pre style={{ backgroundColor: 'gold', width: 'inherit' }}>
            Center #1
          </pre>
        </Column>
        <Column span={{ small: 2, medium: 4, big: 4, large: 6 }} debug>
          <pre style={{ backgroundColor: 'silver', width: 'inherit' }}>
            Center #2
          </pre>
        </Column>
      </Column>
      <Column span={{ small: 4, medium: 4, big: 2, large: 4 }}>
        <pre>Right sidebar</pre>
      </Column>
    </Row>
  </>
)

storiesOf('Atoms/Column', module)
  .add('Column', () => <ColumnStory />)
  .add('Nested Columns', () => <NestedColumnsStory />)
