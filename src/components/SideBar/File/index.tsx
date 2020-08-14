import React, { useState, useCallback } from 'react';
import {
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineFile,
} from 'react-icons/all';

import { Leaf } from './styles';

interface FileData {
  id: number;
  name: string;
  isDirectory: boolean;
  children?: FileData[];
}

interface FileLeafData {
  item: FileData;
  level: number;
}

interface FileContainerProps {
  items: FileData[];
  level: number;
}

const FileLeaf: React.FC<FileLeafData> = ({ item, level }) => {
  const [isShowingChildren, setIsShowingChildren] = useState(false);

  const setCurrentFile = useCallback((id: number) => id, []);

  const handleClick = useCallback(
    () =>
      item.isDirectory
        ? setIsShowingChildren(!isShowingChildren)
        : setCurrentFile(item.id),
    [isShowingChildren, item, setCurrentFile],
  );
  return (
    <>
      <Leaf level={level}>
        <button type="button" onClick={handleClick}>
          {item.isDirectory ? (
            (isShowingChildren && <AiOutlineFolderOpen />) || (
              <AiOutlineFolder />
            )
          ) : (
            <AiOutlineFile />
          )}
          <span>{item.name}</span>
        </button>
      </Leaf>
      {isShowingChildren && item.children && (
        <FileContainer items={item.children} level={level + 1} />
      )}
    </>
  );
};

const FileContainer: React.FC<FileContainerProps> = ({ items, level }) => {
  return (
    <>
      {items.map(item => (
        <FileLeaf key={item.id} item={item} level={level} />
      ))}
    </>
  );
};

export default FileContainer;
