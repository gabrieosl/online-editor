export const SET_FILES = 'SET_FILES';
export const SET_FILE = 'SET_FILE';
export const SET_FILE_SUCCESS = 'SET_FILE_SUCCESS';
export const UPDATE_FILE = 'UPDATE_FILE';
export const DELETE_FILE = 'DELETE_FILE';
export const REFRESH_FILES = 'REFRESH_FILES';

export interface FileData {
  id: number;
  name: string;
  isDirectory: boolean;
  children?: FileData[];
  content?: string;
}

interface SetFilesAction {
  type: typeof SET_FILES;
  payload: FileData[];
}

export interface SetFileAction {
  type: typeof SET_FILE;
  payload: {
    id: number;
  };
}

interface SetFileSuccessAction {
  type: typeof SET_FILE_SUCCESS;
  payload: FileData;
}

interface DeleteFileAction {
  type: typeof DELETE_FILE;
  payload: {
    id: number;
  };
}

export interface UpdateFileAction {
  type: typeof UPDATE_FILE;
  payload: FileData;
}

interface RefreshFiles {
  type: typeof REFRESH_FILES;
}

export type FileActionTypes =
  | SetFilesAction
  | SetFileAction
  | SetFileSuccessAction
  | DeleteFileAction
  | UpdateFileAction
  | RefreshFiles;
