import {combineReducers} from 'redux';

import counterReducer from './todoReducer';

const rootReducer = combineReducers({
  todos: counterReducer,
});

export default rootReducer;
