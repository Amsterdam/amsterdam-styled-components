import {
  Accordion,
  AccordionStyles,
  AccordionWrapper,
} from './components/Accordion'
import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import Blockquote, { BlockquoteStyle } from './components/Blockquote'
import Button, { ButtonProps } from './components/Button'
import ShareButton from './components/Button/ShareButton'
import Card, {
  CardActions,
  CardContainer,
  CardContent,
  CardMedia,
  CardStyles,
} from './components/Card'
import { Checkbox, CheckboxStyle } from './components/Checkbox'
import CompactPager from './components/CompactPager'
import ContextMenu, { ContextMenuSelect } from './components/ContextMenu'
import ContextMenuButtonStyle from './components/ContextMenu/ContextMenuButton'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'
import {
  CustomHTMLBlock,
  CustomHTMLBlockStyle,
} from './components/CustomHTMLBlock'
import Divider from './components/Divider'
import DocumentCover from './components/DocumentCover'
import Datepicker, { DatepickerStyle } from './components/Datepicker'

import {
  EditorialBody,
  EditorialContent,
  EditorialHeader,
  EditorialMetaList,
  EditorialPost,
  EditorialSidebar,
  EditorialStyles,
} from './components/Editorial'
import { Article, ArticleStyle } from './components/Editorial/Article'
import ErrorMessage, { ErrorMessageStyle } from './components/ErrorMessage'
import { FilterBox, FilterBoxStyle } from './components/FilterBox'
import { FilterOption, FilterOptionStyle } from './components/FilterOption'
import FilterTag from './components/FilterTag'
import Footer, {
  FooterBottom,
  FooterHeading,
  FooterSection,
  FooterTop,
} from './components/Footer'
import FormTitle from './components/FormTitle'
import GlobalStyle from './components/GlobalStyle'
import { Column, Container, GridStyles, Row } from './components/Grid'
import Header, { HeaderStyles } from './components/Header'
import Heading, { HeadingStyle } from './components/Heading'
import Hidden from './components/Hidden'
import Icon, { IconStyle } from './components/Icon'
import Image from './components/Image'
import ImageCard, {
  ImageCardContent,
  ImageCardStyles,
} from './components/ImageCard'
import Input, { InputContext, InputStyles } from './components/Input'
import Label, { LabelContext } from './components/Label'
import Link, { LinkStyle } from './components/Link'
import List, { ListItem, ListStyles, OrderedList } from './components/List'
import {
  MenuButton,
  MenuContext,
  MenuFlyOut,
  MenuInline,
  MenuItem,
  MenuItemTitle,
  MenuStyles,
  MenuToggle,
} from './components/Menu'
import Modal from './components/Modal'
import { Pagination } from './components/Pagination'
import Paragraph, { ParagraphStyle } from './components/Paragraph'
import Portal from './components/Portal'
import Quote, { QuoteStyle } from './components/Quote'
import Radio, {
  RadioGroup,
  RadioStyle,
  RadioWrapperStyle,
  RadioCircleStyle,
} from './components/Radio'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import Select, {
  SelectStyle,
  SelectWrapperStyle,
  SelectContentWrapperStyle,
} from './components/Select'
import Switch, { SwitchStyle } from './components/Switch'

import * as constants from './components/shared/constants'
import ShowMoreShowLess from './components/ShowMoreShowLess'
import Spinner from './components/Spinner/Spinner'
import {
  Table,
  TableCell,
  TableHeaderCell,
  TableResizer,
  TableRow,
} from './components/Table'
import Tag, { TagStyle } from './components/Tag'
import TextArea, { TextAreaStyles } from './components/TextArea'
import TextField, { TextFieldStyles } from './components/TextField'
import TopBar, { TopBarStyles } from './components/TopBar'
import TopTaskLink, { TopTaskLinkStyle } from './components/TopTaskLink'
import Typography from './components/Typography'
import { ascDefaultTheme } from './theme'
import CompactThemeProvider from './theme/CompactThemeProvider'
import ThemeProvider from './theme/ThemeProvider'
import { Theme } from './types'

import { perceivedLoading } from './utils/themeUtils'

export {
  useDebounce,
  useActionOnEscape,
  useClickOutside,
  useEdgeDetection,
  useFocus,
  useFocusWithArrows,
  useMatchMedia,
  useOptionalControlledState,
  useTrappedFocus,
} from './utils/hooks'

export * from './components/Alert'
export * from './components/Breadcrumbs'
export * from './components/Tabs'
export {
  breakpoint,
  showAboveBackDrop,
  showHide,
  srOnlyStyle,
  svgFill,
  themeColor,
  themeSpacing,
} from './utils'
export { constants }
export { perceivedLoading }
// Components
export { Datepicker, DatepickerStyle }
export { Quote, QuoteStyle }
export {
  Accordion,
  AccordionWrapper,
  List,
  OrderedList,
  ListItem,
  AmsterdamLogo,
  BackDrop,
  CustomHTMLBlock,
  Button,
  ButtonProps,
  Blockquote,
  Card,
  CardContainer,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Column,
  ContextMenu,
  ContextMenuSelect,
  ContextMenuButtonStyle,
  ContextMenuItem,
  ErrorMessage,
  FilterBox,
  FilterOption,
  FilterTag,
  Footer,
  FooterSection,
  FooterHeading,
  FooterBottom,
  FooterTop,
  GlobalStyle,
  Container,
  Header,
  Icon,
  Divider,
  Image,
  Input,
  ImageCard,
  ImageCardContent,
  Label,
  MenuFlyOut,
  MenuInline,
  MenuItem,
  MenuItemTitle,
  MenuToggle,
  MenuButton,
  Modal,
  Pagination,
  Portal,
  Radio,
  RadioGroup,
  Row,
  Typography,
  SearchBar,
  SearchBarToggle,
  Select,
  ShareButton,
  Spinner,
  TextArea,
  TextField,
  Switch,
  Theme,
  ThemeProvider,
  CompactThemeProvider,
  TopBar,
  TopTaskLink,
  EditorialPost,
  Article,
  Link,
  Paragraph,
  Heading,
  EditorialBody,
  EditorialMetaList,
  EditorialContent,
  EditorialHeader,
  EditorialSidebar,
  ascDefaultTheme,
  DocumentCover,
  Tag,
  CompactPager,
  Hidden,
  FormTitle,
  Table,
  TableResizer,
  TableRow,
  TableCell,
  TableHeaderCell,
  ShowMoreShowLess,
}

export const styles = {
  ...AmsterdamLogoStyles,
  ...BackDropStyles,
  ...CardStyles,
  ...HeaderStyles,
  ...SearchBarStyles,
  ...TextAreaStyles,
  ...TextFieldStyles,
  ...TopBarStyles,
  ...InputStyles,
  ...SearchBarToggleStyles,
  ...MenuStyles,
  ...EditorialStyles,
  ...ImageCardStyles,
  ...GridStyles,
  ...ListStyles,
  ...AccordionStyles,
  ParagraphStyle,
  BlockquoteStyle,
  ErrorMessageStyle,
  IconStyle,
  SelectStyle,
  SelectWrapperStyle,
  SelectContentWrapperStyle,
  LinkStyle,
  HeadingStyle,
  CustomHTMLBlockStyle,
  ArticleStyle,
  SwitchStyle,
  TagStyle,
  TopTaskLinkStyle,
  CheckboxStyle,
  FilterBoxStyle,
  FilterOptionStyle,
  RadioStyle,
  RadioWrapperStyle,
  RadioCircleStyle,
}

export const context = {
  InputContext,
  LabelContext,
  MenuContext,
}
