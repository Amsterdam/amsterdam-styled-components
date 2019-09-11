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

## UNRELEASED

- Fixed: issue with button's size
- Changed: The `max-width` value of the header is now defined by the max width of the grid in the theme configuration

## [0.14.2-rc.1] - 2019-09-09

- Fixed: issue with button's margin
- Added: bullet-list style to List component
- Removed: `Dataportaal` implemenation for header and frontpage blocks
- Added: extra focus style options
- Added: Button variants `Text button` (transparent and borderless) and `Taskflow button` (adds narrow arrow on the right side of the button)

## [0.13.2] - 2019-09-04

- Added: export CompactThemeProvider

## [0.13.1] - 2019-09-02

- Added: Checkbox component
- Deprecated: Renamed the `color` function for extracting a color from the theme to `themeColor` for resolving ambiguity with the color prop in css

## [0.12.7] - 2019-08-21

### ASC-ASSETS

- Fixed: svg object contains svg's again

### ASC-UI

- Changed: Set Modal's className on wrapper (solved issue where className was set on Portal component)

## [0.12.3] - 2019-08-21

- Fixed: IE11 issue in Article component

## [0.12.2] - 2019-08-20

- Deprecated: 'linkType' on Link component. Please use variant instead.
- Added: Able to pass a 'color' prop to Link
- Changed: Link now has a default color black
- Removed: margin-top from Footer and max-width from FooterContent (very specific styling)
- Changed: `MenuFlyOut` no longer opens on tab keydown, only `enter` or `space` (besides `click` or `mouseover`)
- Changed: LinkList(LinkListItem) is renamed to List(ListItem), the Link functionality has to be done in the implementation
- Changed: Breaking change, ListItem(div) is replaced by a ListItem(li), was used as block container in the Modal, Should be replaced in the implementation

## [0.12.0] - 2019-08-13

- Added: MenuButton component: this now can be used as a button or link inside MenuItem
- Changed: **BREAKING** MenuItem now doesn't accept any onClick or href props: it's just a wrapper
  now. Use MenuButton inside MenuItem
- Removed: functionality to use arrows inside a MenuFlyOut / MenuToggle. This created a lot of
  (unnecessary) complexity. Perhaps will be added in the future if really needed.

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
