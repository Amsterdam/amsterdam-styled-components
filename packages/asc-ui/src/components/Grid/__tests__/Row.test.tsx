import React from 'react'
import 'jest-styled-components'
import { render, cleanup } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'

import Row from '../Row'
import RowStyle from '../RowStyle'
import Column from '../Column'
import { mediaQuery } from '../../../utils/grid'

const layouts = {
  huge: {
    columns: 100,
    gutter: 20,
    margin: 20,
    min: 2000,
  },
  somewhereInTheMiddle: {
    columns: 40,
    gutter: 13,
    margin: 17,
    max: 2000,
    min: 750,
  },
  theSmallest: {
    columns: 16,
    max: 750,
  },
}

const theme = {
  ...ascDefaultTheme,
  maxGridWidth: 1920,
  layouts,
}

const mq = (layoutId: string) => mediaQuery(layoutId)({ theme })

describe('Row', () => {
  afterEach(cleanup)

  it('should render debug label', () => {
    const { container, rerender } = render(
      <ThemeProvider theme={theme}>
        <Row>
          <Column span={1}>foo bar</Column>
        </Row>
      </ThemeProvider>,
    )

    expect(container.querySelector('.layout-label')).toBeNull()

    rerender(
      <ThemeProvider theme={theme}>
        <Row debug>
          <Column span={1}>foo bar</Column>
        </Row>
      </ThemeProvider>,
    )

    expect(container.querySelector('.layout-label')).not.toBeNull()
  })
})

describe('RowStyle', () => {
  afterEach(cleanup)

  it("should set the grid's max width", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Row>
          <Column data-testid="span1" span={1}>
            foo bar
          </Column>
        </Row>
      </ThemeProvider>,
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      expect.stringContaining(`${theme.maxGridWidth}`),
    )
  })

  it('should show a linear repeating background image', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Row debug>
          <Column span={1}>foo bar</Column>
        </Row>
      </ThemeProvider>,
    )

    const { layouts } = theme

    Object.keys(layouts).forEach(layoutId => {
      const { columns } = layouts[layoutId]
      const bgRe = new RegExp(`repeating-linear-gradient.* / ${columns}`)

      expect(container.firstChild).toHaveStyleRule(
        'background-image',
        expect.stringMatching(bgRe),
        {
          media: mq(layoutId),
        },
      )
    })
  })

  it('should set alignment style rules', () => {
    const valign = 'flex-end'
    const halign = 'space-around'

    const { container, rerender } = render(
      <ThemeProvider theme={theme}>
        <Row>
          <Column span={1}>foo bar</Column>
        </Row>
      </ThemeProvider>,
    )

    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      RowStyle.defaultProps && RowStyle.defaultProps.halign,
    )
    expect(container.firstChild).toHaveStyleRule(
      'align-items',
      RowStyle.defaultProps && RowStyle.defaultProps.valign,
    )

    rerender(
      <ThemeProvider theme={theme}>
        <Row halign={halign} valign={valign}>
          <Column span={1}>foo bar</Column>
        </Row>
      </ThemeProvider>,
    )

    expect(container.firstChild).toHaveStyleRule('justify-content', halign)
    expect(container.firstChild).toHaveStyleRule('align-items', valign)
  })
})
