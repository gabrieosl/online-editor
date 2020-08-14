import React from 'react';

import ThemeToggler from '../ThemeToggler';
import LanguageSwitch from '../LanguageSwitch';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h3>Online Editor</h3>
      <div>
        <ThemeToggler />
        <LanguageSwitch />
      </div>
    </Container>
  );
};

export default Header;
