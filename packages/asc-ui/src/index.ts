import { ServerStyleSheet, Theme, ascDefaultTheme } from '@datapunt/asc-core'

import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import Icon, { IconStyle } from './components/Icon'
import Input, { InputStyles } from './components/Input'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Heading, { HeadingStyle } from './components/Heading'
import Tag, { TagStyle } from './components/Tag'
import Link, { LinkStyle } from './components/Link'
import Paragraph, { ParagraphStyle } from './components/Paragraph'
import TopBar, { TopBarStyles } from './components/TopBar'
import ShareButton from './components/Button/ShareButton'
import { Article, ArticleStyle } from './components/Editorial/Article'
import Button from './components/Button'
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardStyles,
  CardContainer,
} from './components/Card'
import ContextMenu from './components/ContextMenu'
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
import LinkList, { LinkListItem } from './components/LinkList'
import ListItem from './components/ListItem'
import {
  MenuItemTitle,
  MenuItemLink,
  MenuItemLabel,
  MenuItem,
  MenuFlyOut,
  MenuInline,
  MenuToggle,
  MenuStyles,
} from './components/Menu'
import ThemeProvider from './theme'
import IconButton from './components/deprecated/IconButton'
import ButtonBar from './components/deprecated/ButtonBar'
import Radio from './components/Radio'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import Spinner from './components/Spinner/Spinner'
import TextField, { TextFieldStyles } from './components/TextField'

/**
 * @deprecated
 */
const ShareBar = ButtonBar

export { breakpoint, color, svgFill } from './utils'

export const styles = {
  ...AmsterdamLogoStyles,
  ...BackDropStyles,
  ...CardStyles,
  ...HeaderStyles,
  ...SearchBarStyles,
  ...TextFieldStyles,
  ...TopBarStyles,
  ...InputStyles,
  ...SearchBarToggleStyles,
  ...MenuStyles,
  ...EditorialStyles,
  ...ImageCardStyles,
  ...GridStyles,
  ParagraphStyle,
  IconStyle,
  LinkStyle,
  HeadingStyle,
  CustomHTMLBlockStyle,
  ArticleStyle,
  TagStyle,
}

// Components
export {
  LinkList,
  LinkListItem,
  AmsterdamLogo,
  BackDrop,
  CustomHTMLBlock,
  Button,
  Card,
  CardContainer,
  CardActions,
  CardContent,
  CardMedia,
  ButtonBar,
  ShareBar,
  Column,
  ContextMenu,
  ContextMenuButtonStyle,
  ContextMenuItem,
  Focus,
  GlobalStyle,
  Container,
  GridContainer,
  GridItem,
  Header,
  Icon,
  Divider,
  IconButton,
  Image,
  Input,
  ImageCard,
  ImageCardContent,
  ListItem,
  MenuFlyOut,
  MenuInline,
  MenuItem,
  MenuItemLabel,
  MenuItemLink,
  MenuItemTitle,
  MenuToggle,
  Modal,
  Portal,
  Radio,
  Row,
  Typography,
  SearchBar,
  SearchBarToggle,
  ServerStyleSheet,
  ShareButton,
  Spinner,
  TextField,
  Theme,
  ThemeProvider,
  TopBar,
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
}
