import { combineReducers } from 'redux';

// Reducers
import todos from '../modules/todos/reducer';
import filters from '../modules/filters/reducer';

const rootReducer = combineReducers({
  todos,
  filters
});

export default rootReducer
