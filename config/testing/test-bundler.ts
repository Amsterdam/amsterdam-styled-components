import '@babel/polyfill' // needed for regenerator-runtime
// (ES7 generator support is required by redux-
import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
