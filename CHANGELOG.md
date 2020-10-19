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

## [not released]

- _Fixed_: styling of `Tag` on IE11

## [0.25.2]

- Added: `initialTab` prop to `Tabs` component

## [0.25.1]

- Changed: `ButtonProps` is now exported publicly from the package.

## [0.25.0]

- Changed: Moved packages to @amsterdam organization on NPM.

## [0.24.4]

- Fixed: issue where the `Select` component would call the `onChange` callback both on component mount as well as on value change.
- Changed: Refactored and exported `srOnlyStyle` for screen-reader only elements.

## [0.24.3]

- Fixed: Previous version did not publish, use this one instead.

## [0.24.2]

- Fixed: Radio button active state had bug on IE11

## [0.24.1]

- Fixed: alert close button overrides min-width

## [0.24.0]

- Fixed: Buttons need to be at least 90px width
- Changed: Changed Tabs TabButton `color` in accordance with Design System, added padding to tab content in Tabs stories
- Changed: Tabs container fade is now same width as tab-button right margin
- Fixed: Icon overlay of Checkbox now ignores pointer events
- Fixed: [Taskflow button](https://amsterdam.github.io/amsterdam-styled-components/?path=/docs/ui-form-button--secondary-variant) had a styling issue when focussed

## [0.23.0]

- Removed: style rule `max-width: 620px` from FormTitle
- Added: A new experimental `Tabs` component for tabbed content.
- Deprecated: `icon` prop now only accepts strings: `download` or `external`. If you want to use a custom icon, please pass it as a child
- Changed: `icon` prop to render a download or external link icon
- Deprecated: `with-chevron` variant in Link component. Please use `inList` prop instead
- Removed: custom (yellow) focus-styles on focussable components, so it will now use the browser's default
- Removed: **BREAKING** `fillWhenFocused`, `focusFill`, `outlineWhenFocused` and `focusOutline`
- Removed: **BREAKING** `focusStyle` prop in `Link` component
- Added: `CompactThemeProvider` now accepts the same props as `ThemeProvider`
- Changed: Utility functions for applying focus styling are now exported (`focusOutline`, `outlineWhenFocused`, `focusFill`, and `fillWhenFocused`)
- Fixed: The Select component with the `disabled` prop had an issue with background-color (See [PR](https://github.com/Amsterdam/amsterdam-styled-components/pull/876))
- Changed: **BREAKING** indeterminate state on checkbox should only work when `checked === false` and not truthy. This also inverts behaviour when clicking on an indeterminate checkbox: it will enable all instead of disable all first
- Added: Form elements Checkbox and Radio now have a white background (instead of transparent) (see [PR](https://github.com/Amsterdam/amsterdam-styled-components/pull/875)).
- Added: SVG assets for Ball, Bell, Broom, Building, Buildings, Camera, Car, ChargingPoint, ChatBubble, Chatting, Clock, Collaborate, DocumentCheckmark, DocumentEdit, DocumentEuroSign, EditDocument, Energy, EuroCoin, FastForward, Favourite, Filter, FontEnlarge, FullScreen, HandEuroCoin, Handicap, HousePlant, Housing, IdentityCard, Info, Lamp, Layers, List, LocationFields, MarketStall, Minimize, Pause, PersonDesk, PersonalLogin, Phone, Picture, Plane, Play, Pointer, PublicParks, Purse, Reaction, Religion, Replay, Ruler, Share, Stop, Student, Suitcase, Swimming, ThumbnailResults, ThumbsDown, ThumbsUp, UmbrellaChairs, Video, Volume, VolumeOff, Vote, Wifi icons
- Changed: SVG Ellipsis icon
- Changed: **BREAKING** Removed fill attribute from SVG ChevronSorting icon

## [0.22.0]

- Changed: Introduced `createEvent` utility to support creating events in older browsers.
- Removed: **BREAKING** previously marked deprecated components
- Changed: Link component works better on dark backgrounds
- Changed: **BREAKING** Footer components. Check out footer story for example on usage
- Added: Export `SelectWrapperStyle`
- Changed: **BREAKING** set height of input and select elements to 44px (from 40px) to match the design system
- Added: Make it possible to programmatically set the value and value label for the select component

## [0.21.1]

- Added: general `deprecatedWarning`
- Deprecated: `color` prop in `Paragraph` and `Typography` components. Instead use your own custom style rules.
- Changed: updated the styling of `Alert` conform to design system
- Changed: Select can now handle large texts by overflowing into an ellipsis
- Changed: **BREAKING** removed the `compact` prop/variant in `Alert`
- Changed: **BREAKING** `svgFill` now only accepts CSS color literal or a `ThemeFn` which returns a CSS color (see: https://github.com/Amsterdam/amsterdam-styled-components/pull/594).
- Changed: **BREAKING** The `Link` component no longer supports passing in a `color` prop, use a styled component with the `svgFill` instead.
- Changed: **BREAKING** elements using `aria-hidden` are no longer set to `display: none`
- Fixed: BackDrop component is now decoupled from React Portals
- Fixed: Button in the SearchBar component is now aligned with the TextField
- Fixed: Toggle now hides elements inside properly
- Deprecated: `onDarkBackground` prop in `Link`. Use `darkBackground` instead.
- Added: make it possible to define which boundaries should be used for edge detection

## [0.20.0]

- Changed: ContextMenu list is positioned absolute now
- Added: ContextMenuSelect component, to be used for touchscreens. [Check out the story on how to implement](https://amsterdam.github.io/amsterdam-styled-components/?path=/story/experimental-composed-contextmenu--with-select-on-touch-screen)
- Changed: `::after` and `::before` pseudo elements are now also set to `box-sizing: border-box;` by default
- Changed: HTML5 elements are set to display block for older browsers
- Added: Supplement colors to default theme
- Changed: Stabilized TopTaskLink
- Added: `directChildrenOnly` argument for `useFocusWithArrows` hook
- Added: `noMultiline` prop to Accordion.
- Changed: Accordion displays multiline title by default
- Changed: slight changes to icons in asc-assets': Pano, Map, DocumentText, Data and Api
- Added: `Alert` component has a new variant: [`warning`](https://amsterdam.github.io/amsterdam-styled-components/?path=/story/experimental-composed-alert--variants)
- Added: ErrorMessage component
- Added: Added TextArea component
- Added: Added FormTitle component (see [design system](https://designsystem.amsterdam.nl/7awj1hc9f/p/537bb7-title-component))
- Fixed: `Radio` and `Checkbox` warnings on new `setState()` updates by react-dom. Check [here](https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-updates-during-render) for more info.
- Changed: Internal SVG icon imports are replaced with React components, eliminating the need for including an SVG loader (closes #459)
- Added: Added TopTaskLink component
- Added: `theme` prop to `ThemeProvider` to pass a custom theme
- Changed: **BREAKING** ASC now ships with ESM modules using the `module` field. Make sure that the code is transformed properly if you need to support older platforms (see the [documentation](https://github.com/Amsterdam/amsterdam-styled-components#supporting-older-browsers) or this example WebPack [project](https://github.com/jonkoops/cleanroom)).
- Changed: **BREAKING** `createTheme` method from `Theme`.
- Changed: **BREAKING** removed `themeName` from `ThemeProvider`
- Changed: **BREAKING** removed `asc-core` package. `Theme` and `ascDefaultTheme` can now be found in `asc-ui`
- Changed: **BREAKING** `AlertMessage` export is renamed to `Alert`.
- Changed: **BREAKING** `Icon` component refactored color attribute to being string with css color.
- Changed: **BREAKING** removed the `errorMessage` prop in `Select`. Use the `error` prop and the [ErrorMessage](https://amsterdam.github.io/amsterdam-styled-components/?path=/story/experimental-atoms-errormessage--with-select) component
- Changed: **BREAKING** removed the `errorMessage` prop in `TextField`. Use the `error` prop and the [ErrorMessage](https://amsterdam.github.io/amsterdam-styled-components/?path=/story/experimental-atoms-errormessage--with-input) component
- Added Hidden component

## [0.19.1]

- Changed: AmsterdamLogo is now the default logo in the Header

## [0.19.0]

- Changed: **Breaking** `SearchBar` - `onChange` and `onSubmit` will pass an event now instead of the input value
- Deprecated: `SearchBar` - `onWatchValue` and `onSubmit` button. Instead wrap the component in a `form` element with an `onSubmit` and use `onChange` and `onClear` instead of `onWatchValue`
- Removed: `text-decoration` hover styling from the `HeaderTitle` component (according to design system)
- Added: indeterminate state to Checkboxes
- Changed: **BREAKING** package `styled-components` is now a peer-dependency in `asc-core`! Include the package `styled-components` in your project.
- Changed: The `TextField` component does now have an associated label
- Changed: Discernible name for the `AmsterdamLogo` anchor
- Changed: Accessible names for the `ShareButton` component
- Added: Accordion component
- Added: Alert component
- Deprecated: `GridContainer` & `GridItem`, use `Row` with `Column` instead
- Changed: arrowIcon on ContextMenu is not required anymore
- Changed: **BREAKING** dropped support for `$as` prop (used components: Button, Tag, Heading, FooterHeading and Link). Use styled-component's `forwardedAs` prop instead
- Changed: **BREAKING** `objectFitPolyfill` is now a peerDependency in `asc-ui`
- Changed: Header logo can be passed as a prop in the Header component.

## [0.18.2]

- Changed: **BREAKING** Moved `@datapunt/asc-assets/assets/**` to `@datapunt/asc-assets/static/**` (lowercase)
- Changed: The `perceivedLoading` utility is now exported so it can be used in other apps
- Added: Make it possible to pass a z-index offset to the backdrop
- Added: CompactPager component
- Fixed: Breaking z-index on the `Header`

## [0.18.0] - 2020-01-20

- Changed: Removed `background-color` style for List comp
- Fixed: click outside modal box didn't close the modal
- Added: "open" prop to MenuToggle to also control the open-state outside of the component
- Added: Select (dropdown) component.
- Changed: TextField got new `FormLabel` with `errorMessage`
- Changed: FormLabel has updated style (to design system)
- Changed: Input has `error` variant
- Added: RadioGroup component.
- Changed: Radio component. (completely redeveloped)
- Changed: FilterBox component (removed show more button + sublabel)
- Fixed: IE11 support, by adding `babel-loader` to webpack config
- Added: FilterTag component.
- Changed: Keep the toggle component background colour when toggled and not toggled.
- Added: Export a `BackDrop` component that can be used for i.e. React Portals
- Changed: Setup for managing the `z-index` of the project's components, `z-index` can now be imported in single projects
- Added: `active` prop to MenuButton to enable activeStyles (instead of only on `:hover, :focus`)
- Fixed: Update styling on `Text Button` variant
- Fixed: Menu also closes `OnMouseLeave` when it was opened with an `onClick` event
- Added: ViewerContainer component, a placeholder on viewers to hold components
- Fixed: Modal issue: closing modal when clicking on it
- Expose context components to be used in custom components

## [0.17.5] - 2019-10-30

- Added: Functionality to publish a canary release for internal testing
- Added: Checkbox has a new variant: 'tertiary'
- Changed: Publish script for stable releases has changed, due to addition of canary releases
- Removed: Breaking change: `css` prop for SearchBar and SearchBarToggle.

## [0.17.4] - 2019-10-23

- Added: Button has a new variant: 'application'
- Added: Components "FilterBox" and "FilterOption"
- Added: LabelContext for getting an active state when used with a Checkbox

## [0.17.3] - 2019-10-16

- Added: default `position` prop for Label(Text) is 'right'
- Added: Checkbox has Error state, by passing an `error` prop
- Fixed: updated Checkbox according to design system

## [0.17.2] - 2019-10-14

### ASC-UI

- Added: accessibility support for MenuFlyOut to navigate with arrow keys when open
- Fixed: firefox issue with blurring on MenuFlyOut

## [0.17.0] - 2019-10-14

- Fixed: reset the breakpoints for typography in the CompactTheme as they are not used in this theme
- Added: Make it possible to order the ListItems inside a List component by passing an `order` prop
- Added: OrderedList component
- Changed: Card and ImageCard 'loading' prop to 'isLoading'

## [0.16.0] - 2019-09-17

- Changed: max-width on Container is now desktop (1920px)
- Changed: max-width on HeaderWrapperStyle is moved to HeaderStyle.
- Removed: specific parameter hasLongText from the paragraph, will be implemented in the consumer applications
- Changed: the breakpoints for the typography font sizes are changed to from `tabletS` to `laptop`
- Removed: width: 100% on CustomHTMLBlock img and video

## [0.15.5] - 2019-09-17

- Added: theme spacing unit and a themeSpacing util to retrieve a size from the theme's spacing unit.
- Fixed: issue with button's size
- Changed: The `max-width` value of the header is now defined by the max width of the grid in the theme configuration
- Deprecated: `fromTheme` util method. Use `getValueFromTheme` instead

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
  `import { svg } from '@amsterdam/asc-assets'` and load it like this: `background-image: url(${svg.Logo})`
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
