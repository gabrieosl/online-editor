import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { produce } from 'immer';

import { RootState } from '../../redux';
import { updateFile, deleteFile } from '../../redux/files/actions';

import FileTitle from '../FileTitle';
import Document from '../Document';
import Loading from '../Loading';

import { Container } from './styles';

const FileEditor: React.FC = () => {
  const { data: file, loading } = useSelector(
    (state: RootState) => state.files.currentFile,
  );

  const dispatch = useDispatch();

  const [editedFile, setEditedFile] = useState<typeof file>({} as typeof file);

  const isEdited = useMemo(
    () => editedFile.content !== file.content || editedFile.name !== file.name,
    [file, editedFile],
  );

  const handleEditTitle = useCallback(
    (newValue: string) =>
      setEditedFile(prev =>
        produce(prev, draft => {
          draft.name = newValue;
          return draft;
        }),
      ),
    [],
  );

  const handleEditContent = useCallback(
    (newValue: string) =>
      setEditedFile(prev =>
        produce(prev, draft => {
          draft.content = newValue;
          return draft;
        }),
      ),
    [],
  );

  const handleSave = useCallback(() => {
    dispatch(updateFile(editedFile));
  }, [dispatch, editedFile]);

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteFile(id));
    },
    [dispatch],
  );

  useEffect(() => {
    setEditedFile(file);
  }, [file]);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      {file.id ? (
        <>
          <FileTitle
            title={editedFile.name}
            handleEditTitle={handleEditTitle}
            isEdited={isEdited}
            handleSave={handleSave}
            handleDelete={() => handleDelete(file.id)}
          />
          <Document
            content={editedFile.content as string}
            handleEditContent={handleEditContent}
          />
        </>
      ) : (
        <h4>No file selected!</h4>
      )}
    </Container>
  );
};

export default FileEditor;
