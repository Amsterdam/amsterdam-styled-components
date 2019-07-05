import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'
import { ascDefaultTheme } from '@datapunt/asc-core'
import { mount } from 'enzyme'
import Row from '../Row'
import Column from '../Column'
import ColumnStyle from '../ColumnStyle'
import { ThemeProvider } from '../../../index'
import { mediaQuery } from '../../../utils/grid'

const mq = (layoutId: string) =>
  mediaQuery(layoutId)({ theme: ascDefaultTheme })

describe('Column', () => {
  it('should filter invalid attributes', () => {
    render(
      <ThemeProvider>
        <Row>
          <Column data-testid="foo" aria-labelledby="bar" wrap span={1}>
            <span>Child right here</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(document.querySelectorAll('[data-testid="foo"]')).toHaveLength(1)
    expect(document.querySelectorAll('[aria-labelledby="bar"]')).toHaveLength(1)
    expect(document.querySelectorAll('[wrap]')).toHaveLength(0)
  })
})

describe('ColumnStyle', () => {
  afterEach(cleanup)

  it('should set parentSpan for nested column components', () => {
    const tree = mount(
      <ThemeProvider>
        <Row>
          <Column span={10}>
            <Column data-testid="span5" span={5}>
              Child right here
            </Column>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(
      tree
        .find(ColumnStyle)
        .first()
        .props().parentSpan,
    ).toBeUndefined()
    expect(
      tree
        .find(ColumnStyle)
        .last()
        .props().parentSpan,
    ).toEqual(10)
  })

  it('should show debug information', () => {
    const span = 7
    const { rerender, queryByTestId } = render(
      <ThemeProvider>
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
      <ThemeProvider>
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
      <ThemeProvider>
        <Row>
          <Column data-testid="col" order={2} span={4}>
            <span>Another child</span>
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(queryByTestId('col')).toHaveStyleRule('order', '2')

    rerender(
      <ThemeProvider>
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
      <ThemeProvider>
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

    expect(queryByTestId('span4')).toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 2'),
      {
        media: mq('small'),
      },
    )

    rerender(
      <ThemeProvider>
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

    expect(queryByTestId('span4')).toHaveStyleRule(
      'margin-left',
      expect.stringContaining('* 2'),
      {
        media: mq('small'),
      },
    )
  })

  it('should wrap its contents', () => {
    const { queryByTestId } = render(
      <ThemeProvider>
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
