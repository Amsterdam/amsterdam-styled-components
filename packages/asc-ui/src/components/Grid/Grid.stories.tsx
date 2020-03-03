import React from 'react'
import columnNotes from './Column.md'
import nestedColumnNotes from './ColumnNested.md'
import Column from './Column'
import Row from './Row'

export default {
  title: 'Deprecated/Grid',
}

export const DefaultColumn = () => (
  <>
    <br />
    <br />
    <Row debug hasMaxWidth={false}>
      <Column
        order={{ small: 2, medium: 1, big: 1, large: 1, xLarge: 1 }}
        span={{ small: 1, medium: 1, big: 1, large: 2, xLarge: 2 }}
      >
        <pre style={{ backgroundColor: 'rebeccapurple', width: '100%' }}>
          Left sidebar
        </pre>
      </Column>
      <Column
        order={{ small: 1, medium: 3, big: 2, large: 2, xLarge: 2 }}
        span={{ small: 1, medium: 2, big: 4, large: 8, xLarge: 8 }}
      >
        <pre style={{ backgroundColor: 'gold', width: '100%' }}>
          <p>Center column</p>
        </pre>
      </Column>
      <Column
        order={{ small: 3, medium: 2, big: 3, large: 3, xLarge: 3 }}
        span={{ small: 1, medium: 1, big: 1, large: 2, xLarge: 2 }}
      >
        <pre style={{ backgroundColor: 'rebeccapurple', width: '100%' }}>
          Right sidebar
        </pre>
      </Column>
    </Row>
  </>
)

DefaultColumn.story = {
  parameters: { notes: { markdown: columnNotes } },
}

export const NestingColumns = () => (
  <>
    <br />
    <br />
    <Row debug>
      <Column span={{ small: 1, medium: 2, big: 1, large: 2, xLarge: 2 }}>
        <pre>Left sidebar</pre>
      </Column>

      <Column span={{ small: 1, medium: 2, big: 4, large: 8, xLarge: 8 }}>
        <Column
          span={{ small: 1, medium: 1, big: 2, large: 4, xLarge: 6 }}
          debug
        >
          <pre style={{ backgroundColor: 'gold', width: 'inherit' }}>
            Center #1
          </pre>
        </Column>
        <Column
          span={{ small: 1, medium: 1, big: 2, large: 4, xLarge: 2 }}
          debug
        >
          <pre style={{ backgroundColor: 'silver', width: 'inherit' }}>
            Center #2
          </pre>
        </Column>
      </Column>
      <Column span={{ small: 1, medium: 2, big: 1, large: 2, xLarge: 2 }}>
        <pre>Right sidebar</pre>
      </Column>
    </Row>

    <br />
    <br />

    <Row debug>
      <Column
        wrap
        span={{ small: 1, medium: 2, big: 4, large: 10, xLarge: 10 }}
        push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
      >
        <Column
          span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}
          debug
        >
          <pre style={{ backgroundColor: 'gold', width: 'inherit' }}>
            Center #1
          </pre>
        </Column>

        <Column
          span={{ small: 2, medium: 2, big: 4, large: 3, xLarge: 3 }}
          debug
        >
          <pre style={{ backgroundColor: 'silver', width: 'inherit' }}>
            Center #2
          </pre>
        </Column>
      </Column>
    </Row>
  </>
)

NestingColumns.story = {
  parameters: {
    notes: { markdown: nestedColumnNotes },
  },
}
