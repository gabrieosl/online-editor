import { all } from 'redux-saga/effects';

import files from './files/sagas';

export default function* rootSaga() {
  return yield all([files]);
}
