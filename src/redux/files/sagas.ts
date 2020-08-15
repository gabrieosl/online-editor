import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  setFiles,
  setFileSuccess,
  refreshFiles as refreshFilesAction,
} from './actions';
import { SetFileAction, UpdateFileAction } from './types';

export function* setFile({ payload }: SetFileAction) {
  try {
    const { id } = payload;

    const response = yield call(
      axios.get,
      `${process.env.REACT_APP_API_URL}/files/${id}`,
    );

    yield put(setFileSuccess(response.data));
  } catch (err) {
    console.log('err', err);
  }
}

export function* deleteFile({ payload }: SetFileAction) {
  try {
    const { id } = payload;

    yield call(axios.delete, `${process.env.REACT_APP_API_URL}/files/${id}`);
  } catch (err) {
    console.log('err', err);
  }
}

export function* updateFile({ payload }: UpdateFileAction) {
  try {
    const { id } = payload;

    yield call(
      axios.put,
      `${process.env.REACT_APP_API_URL}/files/${id}`,
      payload,
    );

    yield put(setFileSuccess(payload));
    yield put(refreshFilesAction());
  } catch (err) {
    console.log('err', err);
  }
}

export function* refreshFiles() {
  try {
    const response = yield call(
      axios.get,
      `${process.env.REACT_APP_API_URL}/filetree`,
    );

    yield put(setFiles(response.data));
  } catch (err) {
    console.log('err', err);
  }
}

export default all([
  takeLatest('SET_FILE', setFile),
  takeLatest('DELETE_FILE', deleteFile),
  takeLatest('UPDATE_FILE', updateFile),
  takeLatest('REFRESH_FILES', refreshFiles),
]);
