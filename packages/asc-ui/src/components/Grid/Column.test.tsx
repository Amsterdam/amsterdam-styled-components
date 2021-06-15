import { render, cleanup } from '@testing-library/react'
import Row from './Row'
import Column from './Column'
import { mediaQuery } from '../../utils/grid'
import { ThemeProvider, ascDefaultTheme } from '../../theme'

const theme = {
  ...ascDefaultTheme,
  maxGridWidth: 1920,
  layouts: {
    large: {
      columns: 18,
      margin: 60,
      gutter: 34,
      min: 2000,
      max: 4000,
    },
    big: {
      columns: 12,
      margin: 40,
      gutter: 24,
      max: 2000,
      min: 1000,
    },
    medium: {
      columns: 8,
      margin: 20,
      gutter: 20,
      max: 1000,
      min: 500,
    },
    small: {
      columns: 1,
      margin: 0,
      gutter: 12,
      max: 500,
    },
  },
}

const mq = (layoutId: string) => mediaQuery(layoutId)({ theme })

describe('Column', () => {
  it('should filter invalid attributes', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Row>
          <Column data-testid="foo" aria-labelledby="bar" wrap span={1}>
            <span>Child right here</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(container.querySelectorAll('[data-testid="foo"]')).toHaveLength(1)
    expect(container.querySelectorAll('[aria-labelledby="bar"]')).toHaveLength(
      1,
    )
    expect(container.querySelectorAll('[wrap]')).toHaveLength(0)
  })
})

describe('ColumnStyle', () => {
  afterEach(cleanup)

  it('should show debug information', () => {
    const span = 7
    const { rerender, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Row>
          <Column data-testid="col" span={span}>
            <span>Child right here</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(queryByTestId('col')).not.toHaveStyleRule(
      'content',
      `span ${span}`,
      { modifier: '::before' },
    )

    rerender(
      <ThemeProvider theme={theme}>
        <Row>
          <Column data-testid="col" span={span} debug>
            <span>Another child</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(queryByTestId('col')).toHaveStyleRule('content', `'span ${span}'`, {
      modifier: '::before',
      media: mq('large'),
    })
    expect(queryByTestId('col')).toHaveStyleRule('content', `'span ${span}'`, {
      modifier: '::before',
      media: mq('big'),
    })
    expect(queryByTestId('col')).toHaveStyleRule('content', `'span ${span}'`, {
      modifier: '::before',
      media: mq('medium'),
    })
    expect(queryByTestId('col')).toHaveStyleRule('content', `'span ${span}'`, {
      modifier: '::before',
      media: mq('small'),
    })
  })

  it('should set order values', () => {
    const { queryByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <Row>
          <Column data-testid="col" order={2} span={4}>
            <span>Another child</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(queryByTestId('col')).toHaveStyleRule('order', '2')

    rerender(
      <ThemeProvider theme={theme}>
        <Row>
          <Column
            data-testid="col"
            order={{ large: 8, big: 6, medium: 4, small: 2 }}
            span={4}
          >
            <span>Another child</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(queryByTestId('col')).toHaveStyleRule('order', '8', {
      media: mq('large'),
    })
    expect(queryByTestId('col')).toHaveStyleRule('order', '6', {
      media: mq('big'),
    })
    expect(queryByTestId('col')).toHaveStyleRule('order', '4', {
      media: mq('medium'),
    })
    expect(queryByTestId('col')).toHaveStyleRule('order', '2', {
      media: mq('small'),
    })
  })

  it('should set push values', () => {
    const { queryByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <Row>
          <Column data-testid="span4" span={4} push={2}>
            <span>Another child</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(queryByTestId('span4')).toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 2'),
      {
        media: mq('large'),
      },
    )

    expect(queryByTestId('span4')).toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 2'),
      {
        media: mq('big'),
      },
    )

    expect(queryByTestId('span4')).toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 2'),
      {
        media: mq('medium'),
      },
    )

    expect(queryByTestId('span4')).not.toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 0'),
      {
        media: mq('small'),
      },
    )

    rerender(
      <ThemeProvider theme={theme}>
        <Row>
          <Column
            data-testid="span4"
            span={4}
            push={{ large: 8, big: 6, medium: 4, small: 2 }}
          >
            <span>Another child</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(queryByTestId('span4')).toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 8'),
      {
        media: mq('large'),
      },
    )

    expect(queryByTestId('span4')).toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 6'),
      {
        media: mq('big'),
      },
    )

    expect(queryByTestId('span4')).toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 4'),
      {
        media: mq('medium'),
      },
    )

    expect(queryByTestId('span4')).not.toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 0'),
      {
        media: mq('small'),
      },
    )
  })

  it('should wrap its contents', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Row>
          <Column wrap span={10} data-testid="span10_wrap">
            <Column data-testid="span5" span={5}>
              Child right here
            </Column>

            <Column span={10}>Child right here</Column>

            <Column span={0}>Child right here</Column>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(queryByTestId('span10_wrap')).toHaveStyleRule('flex-wrap', 'wrap')
    expect(queryByTestId('span5')).not.toHaveStyleRule('flex-wrap', 'wrap')
  })
})
