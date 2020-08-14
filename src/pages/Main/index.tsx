import React from 'react';

import Header from '../../components/Header';
import Editor from '../../components/Editor';
import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Editor />
    </Container>
  );
};

export default Main;
