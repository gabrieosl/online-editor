import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/all';

import FileContainer from './File';
import Button from '../Button';

import { Container } from './styles';

interface FileProps {
  id: number;
  name: string;
  isDirectory: boolean;
  children?: FileProps[];
}

const SideBar: React.FC = () => {
  const [files, setFiles] = useState<FileProps[]>([]);
  const [isBarHidden, setIsBarHidden] = useState(false);

  const getFiles = useCallback(async () => {
    const response = await axios.get<FileProps[]>(
      `${process.env.REACT_APP_API_URL}/filetree` as string,
    );
    if (response.status === 200) setFiles(response.data);
  }, []);

  useEffect(() => {
    getFiles();
  }, [getFiles]);

  return (
    <Container isBarHidden={isBarHidden}>
      <h4>File tree</h4>
      <Button
        id="toggle-sidebar"
        variant="text"
        color="text"
        onClick={() => setIsBarHidden(!isBarHidden)}
      >
        {isBarHidden ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </Button>
      <FileContainer items={files} level={0} />
    </Container>
  );
};

export default SideBar;
