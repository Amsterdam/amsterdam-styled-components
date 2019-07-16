# Grid

The grid components depend on a site's theme configuration and specifically the `layouts` section of the theme. A single layout consists of a set of props for the number of columns, the width of the gutters, the margin surrounding the grid and the `min-width` and `max-width` queries, like so:

```javascript
{
  "layouts": {
    "major": {
      "columns": 66, # (number) number of columns that should be available between the values of max and min; required
      "gutter": 20,  # (px) space between two columns; optional (default: 0)
      "margin": 42,  # (px) space on either side of the grid; optional (default: 0)
      "max": 2560,   # (px) max-width media query value; optional
      "min": 1820    # (px) min-width media query value; optional, but either min or max should be present
    },
    "minor": {
      "columns": 12,
      "gutter": 16,
      "margin": 21,
      "max": 1820
    }
  }
}
```

The theme configuration can contain any number of layouts.

Layout names are used to generate media queries for `<Column />` and `<Row />` components and don't adhere to any restrictions.


# `<Row />`

The `Row` component ensures that its children are positionable in a, well, row. It does so by applying `flex-box` style rules. By default, a `Row`'s children are spaced with space between them. The alignment behaviour can be changed by passing a value for `halign` and/or `valign` prop.
A `Row` component can take a `debug` prop. Setting this prop will render a label that shows the name of the layout as well as the min and max values of that layout. It will also render a linearly repeated background image that shows the position of the columns in the grid.

The below example will align the child `Column` component with the remaining space around them. Note that using a different alignmen than the default `space-between` will not ensure the alignment of the `Column` components to the grid.

```jsx
<Row halign="space-around">
  ...
</Row>
```

## Debugging

Setting the `debug` prop on a `<Row />` component will show both a repeating linear background images that indicated where the columns will be placed as well as as label that shows the current layout name based on the width of the screen. The `debugColor` prop can be given a valid color string (hex, hsl, rgb, rbga) which will change the color of the linear gradient.

```jsx
<Row debug debugColor="rgba(0,255,0,0.5)"> // 50% green
  ...
</Row>
```



# `<Column />`

## Spanning

A `Column` component can be configured to span a certain amount of columns at all layouts or an amount of columns per layout:

```jsx
// always span two columns, regardless of layout
<Column span={2}>...</Column>

// conditionally span columns
<Column span={{ major: 4, minor: 3 }}>...</Column>
```

A column can also be pushed a number of columns to the right as can it be given an order the same way it can be given a span:

## Ordering

```jsx
// set the order regardless of layout
<Column order={2}>...</Column>
<Column order={1}>...</Column>

// set a specific order per layout
<Column order={{ major: 1, minor: 2 }}>...</Column>
<Column order={{ major: 2, minor: 1 }}>...</Column> // in minor, this column will be the first
```

## Pushing

```jsx
// always push two columns to the right
<Column push={2}>...</Column>


// conditionally push columns
<Column push={{ major: 0, minor: 1 }}>...</Column>
```

## Debugging

A `Column` component can also be passed a `debug` prop. Setting this prop to 'true' will render a label that shows the current span of that column. As the layout changes, the label on the column will also change value.

```jsx
<Column debug span={2}>...</Column>
```
