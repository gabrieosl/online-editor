import React from 'react';

import FileTitle from '../FileTitle';
import Toolbar from '../Toolbar';
import Document from '../Document';

import { Container } from './styles';

const FileEditor: React.FC = () => {
  return (
    <Container>
      <FileTitle />
      <Toolbar />
      <Document />
    </Container>
  );
};

export default FileEditor;
