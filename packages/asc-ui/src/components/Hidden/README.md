# Hidden

A (headless) component that you can wrap around other components to decide if they should render according to a specific mediaQuery. This component, as it is headless, doesn't render an html element, only the children or nothing.
This component uses the [useMatchMedia](https://github.com/Amsterdam/amsterdam-styled-components/tree/master/packages/asc-ui/src/utils/hooks/useMatchMedia.ts).

## Usage

An example of using this component:
```
<Hidden minBreakpoint="mobileS" maxBreakpoint="laptop">
    <Heading>I am visible only between mobileS and laptop</Heading>
</Hidden>
```

Checkout more samples in the [stories file](https://github.com/Amsterdam/amsterdam-styled-components/tree/master/packages/asc-ui/src/components/Hidden/Hidden.stories.tsx)
