# Amsterdam Styled Components

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](https://github.com/storybooks/storybook)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Build Status](https://travis-ci.org/amsterdam/amsterdam-styled-components.svg?branch=draft)](https://travis-ci.org/amsterdam/amsterdam-styled-components)
[![Coverage Status](https://coveralls.io/repos/github/amsterdam/amsterdam-styled-components/badge.svg?branch=draft)](https://coveralls.io/github/amsterdam/amsterdam-styled-components?branch=draft)

NOTE: this is a draft. We are still experimenting and configuring. Do not use in production.

## Vision

Consistency is always a painpoint in software engineering, especially when it comes to web styling and UX. That is why we think a component library who captures styling but also certain UX aspects, e.g. button loading state, is highly beneficial for organisations with large or multiple applications, such as Datapunt Amsterdam.

We acknowledge that such a library entails some risks and pitfalls and we aim to cover these as much as possible. On the other hand we think that the benefits outweigh the downsides.

##### Quality assurance and durable maintainability

One of the biggest risks is the way a library needs be maintained in order to guarentee quality and keep developers motivated to continue using it. This is at risk when:

- Maintainers stop maintaining, e.g. they leave Datapunt
- Maintainers do not have the time to properly review PR's, e.g. there is no budget/time to spend on the project
- Tests are neglected
- Dev guidelines are violated

Our goal is to set up strict guidelines for development and limit the amount of reviewers in the repo. Creating these guidelines is an iterative process and we invite all who are interested to contribute.

The guidelines can be found here (TBD)

## Trade off

##### PROS:

- Able to reuse components, this will not only save development time in the long term, but it also introduces consistency in design and code. No more copy-paste code.

- Easier to test; strong separation of concerns. Every component keeps its own logic and style.

- A monorepo: one source for styled components and everything that is related to that. Also updates won't immediately affect other repo’s because of versioning

- Great to be used in a living styleguide like Storybook

- Attractive for the (internal) open source community; could even be used outside Datapunt in other departments within the Gemeente Amsterdam.

##### CONS (& risks):

- Quality assurance; we need to set up some well founded contribution guidelines and make sure the repo doesn’t get polluted.

- Versioning: updating the component package might contain breaking changes. This could be prevented for most of the time if we have a proper updating strategy in our guidelines.

- More time to set up, develop and maintain. However, this is an investment for future products that will result in decreasing development time drastically.

## Usage

##### Development
To start watching files and start storybook, run `yarn start`

To test your components in other repo's, do the following:

1. Run `yarn build:watch`, this will watch your files and transpile them to the package lib directory.
2. cd to the package you want to test and run `lerna link`.
3. Go to the repo where you want to use your package and run `npm link <package-name>`. `<package-name>` can be found in the `package.json` you linked in step 2.

Now you can import the package like you would do like a normal npm dependency. Changes you will make in your package will be seen in your repo.
