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

export function setFiles(files: FileData[]): FileActionTypes {
  return {
    type: SET_FILES,
    payload: files,
  };
}

export function setFile(id: number): FileActionTypes {
  return {
    type: SET_FILE,
    payload: { id },
  };
}

export function setFileSuccess(newFile: FileData): FileActionTypes {
  return {
    type: SET_FILE_SUCCESS,
    payload: newFile,
  };
}

export function deleteFile(id: number): FileActionTypes {
  return {
    type: DELETE_FILE,
    payload: { id },
  };
}

export function updateFile(newFileData: FileData): FileActionTypes {
  return {
    type: UPDATE_FILE,
    payload: newFileData,
  };
}

export function refreshFiles(): FileActionTypes {
  return {
    type: REFRESH_FILES,
  };
}
