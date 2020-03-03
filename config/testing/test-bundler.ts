// (ES7 generator support is required by redux-
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import 'jest-styled-components'
import '@testing-library/jest-dom'

configure({ adapter: new Adapter() })
