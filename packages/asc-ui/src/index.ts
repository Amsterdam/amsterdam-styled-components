import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import ErrorMessage, { ErrorMessageStyle } from './components/ErrorMessage'
import Icon, { IconStyle } from './components/Icon'
import Input, { InputStyles, InputContext } from './components/Input'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Heading, { HeadingStyle } from './components/Heading'
import Tag, { TagStyle } from './components/Tag'
import Link, { LinkStyle } from './components/Link'
import Paragraph, { ParagraphStyle } from './components/Paragraph'
import TopBar, { TopBarStyles } from './components/TopBar'
import TopTaskLink, { TopTaskLinkStyle } from './components/TopTaskLink'
import ShareButton from './components/Button/ShareButton'
import { Article, ArticleStyle } from './components/Editorial/Article'
import Button from './components/Button'
import Blockquote, { BlockquoteStyle } from './components/Blockquote'
import { FilterBox, FilterBoxStyle } from './components/FilterBox'
import { FilterOption, FilterOptionStyle } from './components/FilterOption'
import FilterTag from './components/FilterTag'
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardStyles,
  CardContainer,
} from './components/Card'
import { Checkbox, CheckboxStyle } from './components/Checkbox'
import Label, { LabelContext } from './components/Label'
import ContextMenu, { ContextMenuSelect } from './components/ContextMenu'
import ContextMenuButtonStyle from './components/ContextMenu/ContextMenuButton'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'
import {
  CustomHTMLBlock,
  CustomHTMLBlockStyle,
} from './components/CustomHTMLBlock'
import Divider from './components/Divider'
import DocumentCover from './components/DocumentCover'
import Focus from './components/Focus'
import GlobalStyle from './components/GlobalStyle'
import {
  Column,
  Container,
  GridContainer,
  GridItem,
  Row,
  GridStyles,
} from './components/Grid'
import {
  EditorialBody,
  EditorialPost,
  EditorialStyles,
  EditorialMetaList,
  EditorialContent,
  EditorialHeader,
  EditorialSidebar,
} from './components/Editorial'
import Typography from './components/Typography'
import Header, { HeaderStyles } from './components/Header'
import Image from './components/Image'
import ImageCard, {
  ImageCardContent,
  ImageCardStyles,
} from './components/ImageCard'
import List, { ListItem, OrderedList, ListStyles } from './components/List'
import {
  MenuItemTitle,
  MenuItem,
  MenuFlyOut,
  MenuInline,
  MenuToggle,
  MenuStyles,
  MenuButton,
  MenuContext,
} from './components/Menu'
import IconButton from './components/deprecated/IconButton'
import ButtonBar from './components/deprecated/ButtonBar'
import Radio, { RadioGroup } from './components/Radio'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import Select from './components/Select'
import Spinner from './components/Spinner/Spinner'
import TextArea, { TextAreaStyles } from './components/TextArea'
import TextField, { TextFieldStyles } from './components/TextField'
import Footer, {
  FooterContent,
  FooterLinkList,
  FooterLinkListItem,
  FooterBottomLinkList,
  FooterBottomLinkListItem,
  FooterHeading,
  FooterToggle,
  FooterBottom,
  FooterTop,
  FooterStyles,
} from './components/Footer'
import CompactPager from './components/CompactPager'
import ViewerContainer from './components/ViewerContainer/ViewerContainer'
import Alert, { AlertStyle } from './components/Alert'
import {
  Accordion,
  AccordionWrapper,
  AccordionStyles,
} from './components/Accordion'
import Hidden from './components/Hidden'
import FormTitle from './components/FormTitle'
import { themeColor } from './utils'
import { perceivedLoading } from './utils/themeUtils'

import * as hooks from './utils/hooks'
import * as constants from './components/shared/constants'
import { ascDefaultTheme } from './theme'
import ThemeProvider from './theme/ThemeProvider'
import CompactThemeProvider from './theme/CompactThemeProvider'
import { Theme } from './types'

export { constants, hooks }

/**
 * @deprecated
 */
const ShareBar = ButtonBar

/** @deprecated  the color function was renamed to themeColor to eliminate the ambiguity with css color property. Will be removed in the next version */
const color = themeColor
export { color, themeColor, perceivedLoading }

export {
  breakpoint,
  svgFill,
  themeSpacing,
  showAboveBackDrop,
  showHide,
} from './utils'

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
  ...FooterStyles,
  ...ListStyles,
  ...AccordionStyles,
  ParagraphStyle,
  BlockquoteStyle,
  ErrorMessageStyle,
  IconStyle,
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
  Blockquote,
  Card,
  CardContainer,
  CardActions,
  CardContent,
  CardMedia,
  ButtonBar,
  ShareBar,
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
  FooterContent,
  FooterLinkList,
  FooterLinkListItem,
  FooterBottomLinkList,
  FooterBottomLinkListItem,
  FooterHeading,
  FooterToggle,
  FooterBottom,
  FooterTop,
  GlobalStyle,
  Container,
  GridContainer,
  GridItem,
  Header,
  Icon,
  Divider,
  IconButton,
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
}
