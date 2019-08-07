# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Prefix the change with one of these keywords:
- *Added*: for new features.
- *Changed*: for changes in existing functionality.
- *Deprecated*: for soon-to-be removed features.
- *Removed*: for now removed features.
- *Fixed*: for any bug fixes.
- *Security*: in case of vulnerabilities.

## [Unreleased]
- Added: Card components with implementation stories 
- Added: tag component

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
- Changed: *BREAKING* Heading: `as` prop is now `$as`

## [0.9.0] - 2019-07-12
### ASC-UI
- Added: New Typography based components: Heading, Paragraph and Link. Typography is still exported, 
  however not recommended to use for headings, links or paragraphs. Instead use one of these 
  components 
- Added: Footer components
- Changed: Added className / ...otherProps on components that didn't had this already

### ASC-CORE
- Changed typography.ts

