# Amsterdam Styled Components (ASC)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](https://github.com/storybooks/storybook)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Build Status](https://travis-ci.org/Amsterdam/amsterdam-styled-components.svg?branch=main)](https://travis-ci.org/Amsterdam/amsterdam-styled-components)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8662c9dc-e673-434b-9a95-a642e4b45825/deploy-status)](https://app.netlify.com/sites/amsterdam-styled-components/deploys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[Demo site with the storybook of the components](https://amsterdam.github.io/amsterdam-styled-components/?path=/docs/introduction-welcome--page)

## Use components in your project

Please read the [getting started](https://github.com/Amsterdam/amsterdam-styled-components/tree/main/docs/GETTING_STARTED.md) documentation

## Contributing / Creating components

Please read the [CONTRIBUTION.md](https://github.com/Amsterdam/amsterdam-styled-components/tree/main/docs/CONTRIBUTING.md)

## Design system

We aim the components to be aligned with the [Amsterdam Design System](https://designsystem.amsterdam.nl/7awj1hc9f/p/39359e-design-system).
In order to align these components, we contact people on the [DST (Design System Team) slack group](https://dstamsterdam.slack.com) to let them know which components we want to align. Usually some modifications need to be made in both Storybook and Amsterdam Design System.
The state of a component indicates whether it is ‘approved’ as officially aligned. There are two possible states:

1. **stable**: Stable components are aligned and "approved" by the design system. These components are usually embedded in the corresponding the design system.
2. **experimental**: These components are simply not yet aligned and reviewed by the Design system, but they can be used in your project if you want. Keep in mind they can change in the near future when aligning them.

Some components don't have a state in the stories, consider these "experimental".

[More info can be found here](https://github.com/Amsterdam/amsterdam-styled-components/tree/main/docs/CONTRIBUTING.md#aligning)

If you have any questions, please contact one of the [maintainers](https://github.com/Amsterdam/amsterdam-styled-components/tree/main/docs/MAINTAINERS.md) to get access to the [DST slack group](https://dstamsterdam.slack.com)

## Structure

This project is a monorepo with 3 packages

- [asc-assets](packages/asc-assets) - contains fonts and icons (in directory `static`) and react-icons
- [asc-ui](packages/asc-ui) - the react implementation of the components
- [asc-ui-beta](packages/asc-ui-beta) - a new beta version of the components

## Vision

Consistency is always an issue in software engineering, especially when it comes to web styling
and UX. That is why we think a component library who captures styling but also certain UX aspects,
e.g. button loading state, is highly beneficial for organisations with large or multiple
applications, such as the municipality of Amsterdam.

We acknowledge that such a library entails some risks and pitfalls and we aim to cover these as
much as possible. On the other hand we think that the benefits outweigh the downsides.

### Quality assurance and durable maintainability

One of the biggest risks is the way a library needs be maintained in order to guarentee quality and
keep developers motivated to continue using it. This is at risk when:

- Maintainers stop maintaining, e.g. they leave the organisation or company
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
- Attractive for the (internal) open source community

### Risks

- Quality assurance; we need to set up some well founded contribution guidelines and make sure the
  repo doesn’t get polluted.
- Versioning: updating the component package might contain breaking changes. This could be prevented
  for most of the time if we have a proper updating strategy in our guidelines.
- More time to set up, develop and maintain. However, this is an investment for future products that
  will result in decreasing development time drastically.

### Extra information

More detailed information can be found in the README.md of each package.

- [asc-assets](packages/asc-assets/README.md)
- [asc-ui](packages/asc-ui/README.md)
- [asc-ui-beta](packages/asc-ui-beta/README.md)
