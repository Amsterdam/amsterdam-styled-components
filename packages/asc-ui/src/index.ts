import {
  Accordion,
  AccordionStyles,
  AccordionWrapper,
} from './components/Accordion'
import Alert, { AlertStyle } from './components/Alert'
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
import Focus from './components/Focus'
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
import Paragraph, { ParagraphStyle } from './components/Paragraph'
import Portal from './components/Portal'
import Radio, { RadioGroup } from './components/Radio'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import Select, { SelectStyle, SelectWrapperStyle } from './components/Select'
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
import ViewerContainer from './components/ViewerContainer/ViewerContainer'
import { ascDefaultTheme } from './theme'
import CompactThemeProvider from './theme/CompactThemeProvider'
import ThemeProvider from './theme/ThemeProvider'
import { Theme } from './types'
import * as hooks from './utils/hooks'
import { perceivedLoading } from './utils/themeUtils'

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
export { constants, hooks }
export { perceivedLoading }
// Components
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
  Focus,
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
  Alert,
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
  ViewerContainer,
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
  LinkStyle,
  HeadingStyle,
  CustomHTMLBlockStyle,
  ArticleStyle,
  TagStyle,
  TopTaskLinkStyle,
  CheckboxStyle,
  FilterBoxStyle,
  FilterOptionStyle,
  AlertStyle,
}

export const context = {
  InputContext,
  LabelContext,
  MenuContext,
}
