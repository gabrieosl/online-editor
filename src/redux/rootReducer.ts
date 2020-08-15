import { combineReducers } from 'redux';

import files from './files/reducer';

const reducers = combineReducers({
  files,
});

export default reducers;
