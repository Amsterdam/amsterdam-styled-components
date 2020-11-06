import { render, cleanup } from '@testing-library/react'
import List, { ListItem } from '.'

describe('List', () => {
  afterEach(cleanup)
  it('should render a list with two items', () => {
    const { queryAllByText, getByText } = render(
      <List>
        <ListItem>Item1</ListItem>
        <ListItem>Item2</ListItem>
      </List>,
    )

    expect(queryAllByText(/Item/)).toHaveLength(2)

    expect(queryAllByText(/Item/)[0]).toEqual(getByText(/Item1/))
    expect(queryAllByText(/Item/)[1]).toEqual(getByText(/Item2/))
  })

  it('should render a list with two items in the correct order', () => {
    const { queryAllByText } = render(
      <List>
        <ListItem order={6}>Item1</ListItem>
        <ListItem order={5}>Item2</ListItem>
      </List>,
    )

    expect(queryAllByText(/Item/)).toHaveLength(2)

    // We can't test if the flex css order is actually working, so test just for the style rules...
    expect(queryAllByText(/Item/)[0]).toHaveStyleRule('order', '6')
    expect(queryAllByText(/Item/)[1]).toHaveStyleRule('order', '5')
  })
})
