# Amsterdam Styled Components (asc)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](https://github.com/storybooks/storybook)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Build Status](https://travis-ci.org/Amsterdam/amsterdam-styled-components.svg?branch=master)](https://travis-ci.org/Amsterdam/amsterdam-styled-components)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4faed618-ee95-4a15-bebb-448d215dbb38/deploy-status)](https://app.netlify.com/sites/amsterdam-styled-components/deploys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[Demo site with the storybook of the components](https://amsterdam.github.io/amsterdam-styled-components)

## Getting started

Start by installing the latest versions of `asc-ui`, `asc-assets` and `styled-components`. We're including `styled-components` as a peer dependency of Amsterdam Styled Components so you can pick which version of `styled-components` you want to use.

```bash
npm install @datapunt/asc-ui @datapunt/asc-assets styled-components
```

To add Amsterdam Styled Components to your React application you will have to import the following components to your code:

- `ThemeProvider` the provider of various theme variables which are used throughout the application.
- `GlobalStyle` a component that provides the global styles needed, such a various resets to get the same behavior in different browsers.

For example, this basic application shows a simple button and adds the aforementioned components:

```jsx
import { Button, GlobalStyle, ThemeProvider } from '@datapunt/asc-ui'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <Button color="primary">Click me!</Button>
  </ThemeProvider>,
  document.getElementById('root'),
)
```

## Including fonts

By default the fonts used by Amsterdam are not loaded into the page as these are licensed fonts. If you wish to include these fonts follow the steps in the `asc-assets` [documentation](packages/asc-assets/README.md#Fonts).

## Supporting older browsers

If you are going to support older browsers such as Internet Explorer 11 it's important to include some polyfills to enable all of the functionality to work. Since we're shipping code in an ES2015 syntax as well as using ES Modules it's important that you also convert the code itself to the older ES5 syntax that these browsers require.

To do this we highly recommend using a tool such as [babel-env](https://babeljs.io/docs/en/babel-preset-env) together with WebPack to automatically polyfill and transform the code to the platform you want to support.

It's also recommended to polyfill the `object-fit` property if your target does not support it using a [polyfill](https://www.npmjs.com/package/objectFitPolyfill).

## Vision

Consistency is always a painpoint in software engineering, especially when it comes to web styling
and UX. That is why we think a component library who captures styling but also certain UX aspects,
e.g. button loading state, is highly beneficial for organisations with large or multiple
applications, such as Datapunt Amsterdam.

We acknowledge that such a library entails some risks and pitfalls and we aim to cover these as
much as possible. On the other hand we think that the benefits outweigh the downsides.

### Quality assurance and durable maintainability

One of the biggest risks is the way a library needs be maintained in order to guarentee quality and
keep developers motivated to continue using it. This is at risk when:

- Maintainers stop maintaining, e.g. they leave Datapunt
- Maintainers do not have the time to properly review PR's, e.g. there is no budget/time to spend
  on the project
- Tests are neglected
- Dev guidelines are violated

Our goal is to set up strict guidelines for development and limit the amount of reviewers in the
repo. Creating these guidelines is an iterative process and we invite all who are interested to
contribute.

The guidelines can be found here (TBD)

## Tradeoff

### PROS

- Able to reuse components, this will not only save development time in the long term, but it also
  introduces consistency in design and code. No more copy-paste code.
- Easier to test; strong separation of concerns. Every component keeps its own logic and style.
- A monorepo: one source for styled components and everything that is related to that. Also updates
  won't immediately affect other repo’s because of versioning
- Great to be used in a living styleguide like Storybook
- Attractive for the (internal) open source community; could even be used outside Datapunt in other
  departments within the Municipality of Amsterdam.

### Risks

- Quality assurance; we need to set up some well founded contribution guidelines and make sure the
  repo doesn’t get polluted.
- Versioning: updating the component package might contain breaking changes. This could be prevented
  for most of the time if we have a proper updating strategy in our guidelines.
- More time to set up, develop and maintain. However, this is an investment for future products that
  will result in decreasing development time drastically.

### Contributing

Please read the [CONTRIBUTION.md](./docs/CONTRIBUTING.md)

## Structure

This project is a monorepo with 2 packages

- [asc-assets](packages/asc-assets) - contains fonts and icons (in directory `static`) and react-icons
- [asc-ui](packages/asc-ui) - the react implementation of the components

## Usage

Make sure you have the right node version set (see the package.json). Run `yarn` to install the
dependencies. Next run `yarn start` to start storybook!

### While developing

Something you want to see your changes immediately in your project. Follow these steps to link asc
to your project.

1. Run `yarn build:watch`, this will watch your files and transpile them to the package lib
   directory.
2. cd to the package you want to test, run `yarn link`.
3. Go to the repo where you want to use your package and run
   `yarn link <package-name>`. The `<package-name>` can be found in the `package.json` you linked in
   step 2.

Now you can import the package like you would do like a normal npm dependency. Changes you will make
in your package will be seen in your repo.

Example: linking the `asc-ui` package.

```
cd amsterdam-styled-components/packages/asc-ui  # go into the package directory
yarn link                                       # creates global link
cd path-to-your-main-project                    # go into the dir of your main project
yarn link "@datapunt/asc-ui"                    # link-install the package
```

There is a known issue when developing with `yarn link` and using Hooks
[(click here for details)](https://reactjs.org/warnings/invalid-hook-call-warning.html). The cause
is that two React instances are used when using `link`. To solve this problem add this code to `webpack.common.js`:

```javascript
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
```

### References and inspiration

- [Material ui](https://material-ui.com/getting-started/installation/)
- [styled-components](https://www.styled-components.com/)

### Extra information

More detailed information can be found in the README.md of each package.

- [asc-assets](packages/asc-assets/README.md)
- [asc-ui](packages/asc-ui/README.md)

### Stability of components

All components that are placed inside of the 'Experimental' section of Storybook should be considered
unstable and prone to change. Components that are approved by the Design System team and with a solid
technical implementation will be moved out of this section when deemed ready and can be used freely.
