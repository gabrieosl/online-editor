import React from 'react';

import SideBar from '../SideBar';
import FileEditor from '../FileEditor';
import { Container } from './styles';

const Editor: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <FileEditor />
    </Container>
  );
};

export default Editor;
