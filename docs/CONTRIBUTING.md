# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, slack, or any other method with the owners of this repository before making a change.

## Conventions and rules

While developing we use the following conventions and rules to develop components.

### Packages

- _asc-assets_ contains icons and fonts. This package can be used standalone in other projects that
  are not using Amsterdam Styled Components.
- _asc-ui_ is the main package where we develop our components.

### File structure and content

A typical structure of a component would look like this

```
+-- asc-ui
|   +-- src
|   |   +-- components
|   |   |   +-- Footer (1)
|   |   |   |   +-- Footer.tsx (2)
|   |   |   |   +-- FooterStyle.ts (3)
|   |   |   |   +-- FooterStyle.test.tsx (4)
|   |   |   |   +-- FooterStyle.stories.tsx (5)
|   |   |   |   +-- index.ts (6)
|   |   +-- index.ts (7)
```

1. This it the directory containing the component's name
2. This is the React component. This uses the \*Style.ts component
3. This file contains styled-component related stuff, and **no react** code.
4. This contains the tests (obviously)
5. Stories for storybook. Feel free to also add a real life example of how you'd use it in your
   project!
6. This will contain a default export, pointed to the .tsx file (2). If needed, you can also
   re-export the \*Style.ts file.
7. Eventually, we need to make our component available to use in other project, so we import
   the corresponding component's default index.ts and make it available in the export.

**Pro tip!** Use generators to quickly add the needed files to develop components.
To make life a little easier, we added [hygen](https://www.hygen.io/). Simply run
`hygen component new`. You will be prompted with questions the generator needs to build the files
for the new component. For more info possibilities, check the hygen documentation.

![hygen](../media/hygen.gif)

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the [CHANGELOG.md unreleased sections](../CHANGELOG.md#user-content-unreleasedd) with
   details of changes, this includes additions (new components or (theme) configurations), changes
   and removals.
3. Once your PR is approved and merged, you can bump a version yourself or contact one of the
   [core maintainers](./MAINTAINERS.md) to discuss the version to bump. The versioning scheme we
   use is [SemVer](http://semver.org/).

## Publishing

For now, only core maintainers can publish. If you want have rights to publish as well, contact one
of the [core maintainers](./MAINTAINERS.md). To publish these packages to npm, follow these steps:

### Publish canary version

1. Make sure you're logged in to npm, by running `npm login`
2. Run `yarn publish:canary`. This will run linters and tests before the lerna prompt,
   so be patient :smile:
3. This canary version is now available for usage in any local or demo version of your project, but not tagged with the `@latest` tag on npm. So use for example `yarn add @datapunt/asc-ui@canary`.

### Publish stable version

1. Make sure you're logged in to npm, by running `npm login`
2. Run `yarn publish:stable`. This will run linters and tests before the lerna prompt,
   so be patient :smile:
3. Select a version
4. Once published, update the [changelog](../CHANGELOG.md) and move all the bulletpoints under the
   Unreleased section to the corresponding file.

## Troubleshooting

Sometimes you either can't build the project or run tests properly. Usually this is due to the fact
that a package is updated or you're not using the right node version. Please check if this is the
case. Otherwise just run this command (if you are using nvm):
`rm -Rf node_modules && nvm install 10 && nvm alias default 10 && yarn cache clean && yarn`

Still having trouble? Contact one of our [core maintainers](./MAINTAINERS.md)

## Known issues

- ESLint is taking very VERY long, due to eslint-config-prettier...
- When deploying to github pages with `npm run deploy-storybook` there are \*.d definition files
  generated. These should not be checked in and can be discarded without problems.
- When our when storybook is build, some components don't have the style they have to get. This
  problem is caused when for example a css object is imported from a file, that imported the target
  css (exported more than twice).
