import { ServerStyleSheet, Theme, ascDefaultTheme } from '@datapunt/asc-core'

import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import IconButton from './components/IconButton'
import Icon from './components/Icon'
import Input, { InputStyles } from './components/Input'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Typography, {
  Link,
  Paragraph,
  Heading,
  Summary,
} from './components/Typography'
import TopBar, { TopBarStyles } from './components/TopBar'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Button from './components/Button'
import CustomHTMLBlock, {
  CustomHTMLBlockStyles,
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
import {
  GridContainer,
  GridItem,
  Column,
  Row,
  Container,
} from './components/Grid'
import {
  BlogBody,
  BlogPost,
  BlogStyles,
  BlogMetaList,
  BlogContent,
  BlogHeader,
  BlogSidebar,
} from './components/Blog'
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
import Publication from './components/Publication'
import Downloader from './components/DocumentCover'
import { Article, ArticleStyle } from './components/Article'

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
  ...CustomHTMLBlockStyles,
  ...MenuStyles,
  ...BlogStyles,
  ArticleStyle,
}

// Components
export {
  LinkList,
  LinkListItem,
  AmsterdamLogo,
  BackDrop,
  CustomHTMLBlock,
  Button,
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
  SearchBar,
  SearchBarToggle,
  ServerStyleSheet,
  ShareBar,
  ShareButton,
  Spinner,
  TextField,
  Theme,
  ThemeProvider,
  Typography,
  TopBar,
  BlogPost,
  Article,
  Publication,
  Link,
  Paragraph,
  Heading,
  Summary,
  BlogBody,
  BlogMetaList,
  BlogContent,
  BlogHeader,
  BlogSidebar,
  ascDefaultTheme,
  Downloader,
}
