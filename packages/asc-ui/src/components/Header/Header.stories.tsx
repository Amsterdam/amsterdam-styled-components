import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from '@datapunt/asc-core'
import { ReactComponent as ChevronRight } from '@datapunt/asc-assets/lib/Icons/ChevronRight.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import { ReactComponent as ExternalLink } from '@datapunt/asc-assets/lib/Icons/ExternalLink.svg'
import { ReactComponent as MenuIcon } from '@datapunt/asc-assets/lib/Icons/Menu.svg'
import BoxWrapper from '../../internals/Box/BoxWrapper'
import Header, {
  HeaderWrapperStyle,
  SearchBarStyle,
  MenuBarStyle,
  MenuDropDownStyle,
} from './Header'
import ContentFiller from '../../internals/ContentFiller/ContentFiller'
import Typography from '../Typography'
import SearchBar from '../SearchBar'
import Menu from '../Menu/Menu'
import { MenuItem, MenuLabel } from '../..'
import SubMenu from '../Menu/SubMenu'
import { breakpoint } from '../../utils'

const outsideBackgoundColor = '#E6E6E6'
const contentBackgrountColor = '#ffffff'

const HeaderShortStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth
    />
    <ContentFiller backgroundColor={contentBackgrountColor} />
  </BoxWrapper>
)

const HeaderShortContentStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    />
    <ContentFiller backgroundColor={contentBackgrountColor} maxWidth="1800px" />
  </BoxWrapper>
)

const HeaderTallStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    />
    <ContentFiller
      backgroundColor={contentBackgrountColor}
      maxWidth="1800px"
      headerSize="tall"
    />
  </BoxWrapper>
)

const HeaderTallWithContentStory: React.FC<{}> = () => (
  <BoxWrapper backgroundColor={outsideBackgoundColor}>
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    >
      <Typography element="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis,
        dicta incidunt maxime necessitatibus voluptatibus.
      </Typography>
    </Header>
    <ContentFiller
      backgroundColor={contentBackgrountColor}
      maxWidth="1800px"
      headerSize="tall"
    />
  </BoxWrapper>
)

const DataportaalHeaderWrapperStyle = styled(HeaderWrapperStyle)`
  ${SearchBarStyle} {
    flex-grow: 1;
    & > div {
      flex-grow: 0;
      width: 100%;
      max-width: 430px;

      @media screen and ${breakpoint('max-width', 'mobileM')} {
        max-width: 245px;
      }
    }
  }

  ${MenuBarStyle} {
    @media screen and ${breakpoint('max-width', 'tablet')} {
      display: none;
    }
  }

  ${MenuDropDownStyle} {
    @media screen and ${breakpoint('min-width', 'tablet')} {
      display: none;
    }
  }
`

const MenuDesktop = (
  <Menu>
    <MenuItem onClick={action('click')}>One</MenuItem>
    <SubMenu label="Two">
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuLabel>Two</MenuLabel>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuItem icon={<ExternalLink />} onClick={action('click')}>
        Show more
      </MenuItem>
    </SubMenu>
    <MenuItem onClick={action('click')}>Three</MenuItem>
  </Menu>
)

const MenuMobile = (
  <Menu icon={<MenuIcon />} mobile>
    <MenuItem onClick={action('click')}>One</MenuItem>
    <SubMenu arrowIcon={<ChevronDown />} label="Two">
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuLabel>Two</MenuLabel>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuItem icon={<ExternalLink />} onClick={action('click')}>
        Show more
      </MenuItem>
    </SubMenu>
    <MenuItem onClick={action('click')}>Three</MenuItem>
  </Menu>
)

const SearchBarDesktop: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')
  return (
    <SearchBar
      placeholder="Enter the search text"
      onTextChanged={(text: string) => {
        setText(text)
        action(`text changed: ${searchText}`)
      }}
      onSearch={() => {
        action(`button clicked: ${searchText}`)
      }}
      text={searchText}
    />
  )
}

// const SearchBarMobile = (
//   <SearchBar
//     placeholder="Enter the search text"
//     onTextChanged={(text: string) => {
//       setText(text)
//       action(`text changed: ${searchText}`)
//     }}
//     onSearch={() => {
//       action(`button clicked: ${searchText}`)
//     }}
//     text={searchText}
//   />
// )

const HeaderTallDataportaalStory: React.FC<{}> = () => {
  return (
    <BoxWrapper backgroundColor={outsideBackgoundColor}>
      <Header
        tall
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        fullWidth={false}
        styledComponent={DataportaalHeaderWrapperStyle}
      >
        <SearchBarDesktop />
        {MenuDesktop}
        {MenuMobile}
      </Header>
      <ContentFiller
        backgroundColor={contentBackgrountColor}
        maxWidth="1800px"
        headerSize="tall"
      />
    </BoxWrapper>
  )
}

storiesOf('Composed/Header', module)
  .add('Header short', () => <HeaderShortContentStory />)
  .add('Header short, full width', () => <HeaderShortStory />)
  .add('Header tall', () => <HeaderTallStory />)
  .add('Header tall with header content', () => <HeaderTallWithContentStory />)
  .add('Header tall for dataportaal', () => <HeaderTallDataportaalStory />)
