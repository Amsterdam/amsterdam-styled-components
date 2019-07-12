import * as React from 'react'
import { storiesOf } from '@storybook/react'
import columnNotes from './Column.md'
import nestedColumnNotes from './ColumnNested.md'
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
        <pre style={{ backgroundColor: 'rebeccapurple', width: '100%' }}>
          Left sidebar
        </pre>
      </Column>
      <Column
        order={{ small: 1, medium: 3, big: 2, large: 2 }}
        span={{ small: 4, medium: 8, big: 8, large: 12 }}
      >
        <pre style={{ backgroundColor: 'gold', width: '100%' }}>
          <p>Center column</p>
        </pre>
      </Column>
      <Column
        order={{ small: 3, medium: 2, big: 3, large: 3 }}
        span={{ small: 4, medium: 4, big: 2, large: 4 }}
      >
        <pre style={{ backgroundColor: 'rebeccapurple', width: '100%' }}>
          Right sidebar
        </pre>
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

    <br />
    <br />

    <Row debug>
      <Column
        wrap
        span={{ small: 4, medium: 8, big: 10, large: 14 }}
        push={{ small: 0, medium: 0, big: 1, large: 2 }}
      >
        <Column span={{ small: 2, medium: 4, big: 10, large: 9 }} debug>
          <pre style={{ backgroundColor: 'gold', width: 'inherit' }}>
            Center #1
          </pre>
        </Column>

        <Column span={{ small: 2, medium: 4, big: 10, large: 5 }} debug>
          <span style={{ backgroundColor: 'silver', width: 'inherit' }}>
            Center #2
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </span>
        </Column>
      </Column>
    </Row>
  </>
)

storiesOf('Atoms/Grid', module)
  .add('Column', () => <ColumnStory />, { notes: { markdown: columnNotes } })
  .add('Nesting Columns', () => <NestedColumnsStory />, {
    notes: { markdown: nestedColumnNotes },
  })
