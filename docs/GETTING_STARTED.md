# Getting started

Start by installing the latest versions of `asc-ui`, `asc-assets` and `styled-components`. We're including `styled-components` as a peer dependency of Amsterdam Styled Components so you can pick which version of `styled-components` you want to use.

```bash
npm install @amsterdam/asc-ui @amsterdam/asc-assets styled-components
```

or with yarn

```bash
yarn add @amsterdam/asc-ui @amsterdam/asc-assets styled-components
```

To add Amsterdam Styled Components to your React application you will have to import the following components to your code:

- `ThemeProvider` the provider of various theme variables which are used throughout the application.
- `GlobalStyle` a component that provides the global styles needed, such a various resets to get the same behavior in different browsers.

For example, this basic application shows a simple button and adds the aforementioned components:

```jsx
import { Button, GlobalStyle, ThemeProvider } from '@amsterdam/asc-ui'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <ThemeProvider>
    <GlobalStyle />
    <Button variant="primary">Click me!</Button>
  </ThemeProvider>
)
```

## Including fonts

By default the fonts used by Amsterdam are not loaded into the page as these are licensed fonts. If you wish to include these fonts follow the steps in the `asc-assets` [documentation](/packages/asc-assets/README.md#Fonts).

## Supporting older browsers

If you are going to support older browsers such as Internet Explorer 11 it's important to include some polyfills to enable all of the functionality to work. Since we're shipping code in an ES2015 syntax as well as using ES Modules it's important that you also convert the code itself to the older ES5 syntax that these browsers require.

To do this we highly recommend using a tool such as [babel-env](https://babeljs.io/docs/en/babel-preset-env) together with WebPack to automatically polyfill and transform the code to the platform you want to support.

It's also recommended to polyfill the `object-fit` property if your target does not support it using a [polyfill](https://www.npmjs.com/package/objectFitPolyfill).
