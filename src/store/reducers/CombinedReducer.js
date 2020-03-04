import CountReducer from './CountReducer.js';
import ApiReducer from './ApiReducer.js';
import { combineReducers } from 'redux'

const reduce = combineReducers({
  count: CountReducer,
  search: ApiReducer
});
export default reduce;