import { ServerStyleSheet, Theme, ascDefaultTheme } from '@datapunt/asc-core'

import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import IconButton from './components/Button/IconButton'
import Icon from './components/Icon'
import Input, { InputStyles } from './components/Input'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Heading from './components/Heading'
import Link from './components/Link'
import Paragraph from './components/Paragraph'
import TopBar, { TopBarStyles } from './components/TopBar'
import ShareButton from './components/Button/ShareButton'
import Button from './components/Button'
import {
  CustomHTMLBlock,
  CustomHTMLBlockStyle,
} from './components/CustomHTMLBlock'
import Radio from './components/Radio'
import Focus from './components/Focus'
import ContextMenu from './components/ContextMenu'
import ContextMenuButtonStyle from './components/ContextMenu/ContextMenuButton'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'
import Header, { HeaderStyles } from './components/Header'
import Divider from './components/Divider'
import ListItem from './components/ListItem'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import TextField, { TextFieldStyles } from './components/TextField'
import GlobalStyle from './components/GlobalStyle'
import ImageCard, {
  ImageCardContent,
  ImageCardStyles,
} from './components/ImageCard'
import {
  GridContainer,
  GridItem,
  Column,
  Row,
  Container,
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
import Spinner from './components/Spinner/Spinner'
import LinkList, { LinkListItem } from './components/LinkList'
import DocumentCover from './components/DocumentCover'
import { Article, ArticleStyle } from './components/Editorial/Article'
import ButtonBar from './components/ButtonBar'

export { breakpoint } from './utils'

export const styles = {
  ...AmsterdamLogoStyles,
  ...BackDropStyles,
  ...HeaderStyles,
  ...SearchBarStyles,
  ...TextFieldStyles,
  ...TopBarStyles,
  ...InputStyles,
  ...SearchBarToggleStyles,
  ...MenuStyles,
  ...EditorialStyles,
  ...ImageCardStyles,
  CustomHTMLBlockStyle,
  ArticleStyle,
}

/**
 * @deprecated Use ButtonBar instead
 */
const ShareBar = ButtonBar

// Components
export {
  LinkList,
  LinkListItem,
  AmsterdamLogo,
  BackDrop,
  CustomHTMLBlock,
  Button,
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
}
