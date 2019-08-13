# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Prefix the change with one of these keywords:

- _Added_: for new features.
- _Changed_: for changes in existing functionality.
- _Deprecated_: for soon-to-be removed features.
- _Removed_: for now removed features.
- _Fixed_: for any bug fixes.
- _Security_: in case of vulnerabilities.

## [Unreleased]

## [0.11.0] - 2019-08-09

- Added: Card components with implementation stories
- Added: tag component
- Added: new way of loading svg's: instead of importing like this:  
  `import Logo from '@datapunt/asc-assets/lib/assets/Icons/Logo.svg'` you now can use the svg object: 
  `import { svg } from '@datapunt/asc-assets'` and load it like this: `background-image: url(${svg.Logo})`
- Added: Image component can render images as a square (including IE11)

## [0.10.0] - 2019-08-05

- Added: react-docgen-typescript-loader to storybook config for showing props with description
- Added: font-display: swap; in font-face definitions
- Added: separate tsconfig for building the lib: now excludes .test and .stories files
- Deprecated: Made IconButton, ButtonBar and ShareBar deprecated. Also refactored this in other
  components than use IconButton
- Added: stories for buttons
- Changed: Refactored the Button component to use the prop "variants" instead of "color".
- Removed: ShareBar, named export however still exists

## [0.9.2] - 2019-07-24

### ASC-UI

- Added: Blog Components
- Changed: _BREAKING_ Heading: `as` prop is now `$as`

## [0.9.0] - 2019-07-12

### ASC-UI

- Added: New Typography based components: Heading, Paragraph and Link. Typography is still exported,
  however not recommended to use for headings, links or paragraphs. Instead use one of these
  components
- Added: Footer components
- Changed: Added className / ...otherProps on components that didn't had this already

### ASC-CORE

- Changed typography.ts
