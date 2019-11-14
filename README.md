# Amsterdam Styled Components (asc)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](https://github.com/storybooks/storybook)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Build Status](https://travis-ci.org/Amsterdam/amsterdam-styled-components.svg?branch=master)](https://travis-ci.org/Amsterdam/amsterdam-styled-components)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4faed618-ee95-4a15-bebb-448d215dbb38/deploy-status)](https://app.netlify.com/sites/amsterdam-styled-components/deploys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[Demo site with the storybook of the components](https://amsterdam.github.io/amsterdam-styled-components)

## Install the complete asc project
`npm install --save @datapunt/asc-assets @datapunt/asc-core @datapunt/asc-ui`

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

This project is a monorepo with 3 packages

- [asc-assets](packages/asc-assets) - contains Fonts and Icons
- [asc-core](packages/asc-core) - contains the theme definitions
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

### Using with Webpack

These Component Library renders SVGs as Components, something that should be supported by your 
Webpack configuration. In case you run into any problems, consider the following steps:

1. Run `npm install @svgr/webpack url-loader`
2. In your `webpack.config.js` add:

  ```json
  {
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  }
  ```

3. Integrate in your code:

```jsx
import { Close } from '@datapunt/asc-assets'
const App = () => (
  <div>
    <Close />
  </div>
)
```

### References and inspiration

- [Material ui](https://material-ui.com/getting-started/installation/)
- [styled-components](https://www.styled-components.com/)

### Extra information

More detailed information can be found in the README.md of each package.

- [asc-assets](packages/asc-assets/README.md)
- [asc-core](packages/asc-core/README.md)
- [asc-ui](packages/asc-ui/README.md)
