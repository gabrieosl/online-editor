import React from 'react';
import { FiGithub, GoBrowser } from 'react-icons/all';

import Header from '../../components/Header';
import Editor from '../../components/Editor';
import { Container, Footer } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Editor />
      <Footer>
        <a href="https://github.com/gabrieosl">
          <FiGithub />
          &nbsp;/gabrieosl
        </a>
        <a href="https://gabrieosl.me">
          <GoBrowser />
          &nbsp;gabrieosl.me
        </a>
        <span>© 2020 Gabriel lima</span>
      </Footer>
    </Container>
  );
};

export default Main;
