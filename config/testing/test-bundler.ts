// (ES7 generator support is required by redux-
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import 'jest-styled-components'
import '@testing-library/jest-dom'

configure({ adapter: new Adapter() })
