import produce from 'immer';

import {
  SET_FILES,
  SET_FILE,
  SET_FILE_SUCCESS,
  UPDATE_FILE,
  DELETE_FILE,
  REFRESH_FILES,
  FileActionTypes,
  FileData,
} from './types';

interface FileState {
  allFiles: {
    loading: boolean;
    data: FileData[];
  };
  currentFile: {
    loading: boolean;
    data: FileData;
  };
}
const INITIAL_STATE: FileState = {
  allFiles: {
    loading: true,
    data: [],
  },
  currentFile: {
    loading: false,
    data: {} as FileData,
  },
};

export default function editingFileReducer(
  state = INITIAL_STATE,
  action: FileActionTypes,
): FileState {
  return produce(state, draft => {
    switch (action.type) {
      case SET_FILES: {
        draft.allFiles.loading = false;
        draft.allFiles.data = action.payload;
        break;
      }
      case SET_FILE: {
        draft.currentFile.loading = true;
        break;
      }
      case SET_FILE_SUCCESS: {
        draft.currentFile.loading = false;
        draft.currentFile.data = action.payload;
        break;
      }
      case UPDATE_FILE: {
        draft.currentFile.data = action.payload;
        break;
      }
      case DELETE_FILE: {
        draft.currentFile.loading = false;
        draft.currentFile.data = {} as FileData;
        break;
      }
      case REFRESH_FILES: {
        draft.allFiles.loading = true;
        break;
      }
      default:
    }
  });
}
