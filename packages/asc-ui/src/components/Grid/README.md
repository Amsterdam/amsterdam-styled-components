# Grid components

## Column

### Spanning

A `Column` component can be configured to span a certain amount of columns at all layouts or an amount of columns per layout:

```jsx
// always span two columns, regardless of layout
<Column span={2}>...</Column>

// conditionally span columns
<Column span={{ layout1: 4, layout2: 3 }}>...</Column>
```

A column can also be pushed a number of columns to the right as can it be given an order the same way it can be given a span:

### Ordering

```jsx
// set the order regardless of layout
<Column order={2}>...</Column>
<Column order={1}>...</Column>

// set a specific order per layout
<Column order={{ layout1: 1, layout2: 2 }}>...</Column>
<Column order={{ layout1: 2, layout2: 1 }}>...</Column> // in layout2, this column will be the first
```

### Pushing

```jsx
// always push two columns to the right
<Column push={2}>...</Column>


// conditionally push columns
<Column push={{ layout1: 0, layout2: 1 }}>...</Column>
```

### Debugging

A `Column` component can also be passed a `debug` prop. Setting this prop to 'true' will render a label that shows the current span of that column. As the layout changes, the label on the column will also change value.

```jsx
<Column debug span={2}>...</Column>
```

### Nesting

Nesting columns can be tricky, because of the width of the parent element. The `Column` element contains its own parent span context and can thus safely be nested:

```jsx
<Column wrap span={10}>
  <Column span={4}>...</Column>
  <Column span={6}>...</Column>
</Column>
```

Whenever a child `Column` component should span the entire width of its parent, the parent should be passed the prop `wrap`. If not, all child components will remain adjacent to one another.

## Row

The `Row` component ensures that its children are positionable in a, well, row. It does so by applying `flex-box` style rules. By default, a `Row`'s children are spaced with space between them. The alignment behaviour can be changed by passing a value for `halign` and/or `valign` prop.
A `Row` component can take a `debug` prop. Setting this prop will render a label that shows the name of the layout as well as the min and max values of that layout. It will also render a linearly repeated background image that shows the position of the columns in the grid.

The below example will align the child `Column` component with the remaining space around them. Note that using a different alignmen than the default `space-between` will not ensure the alignment of the `Column` components to the grid.

```jsx
<Row debug halign="space-around" debug>
  ...
</Row>
```
