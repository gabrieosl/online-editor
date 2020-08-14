import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useTheme } from '../../context/theme';

import { Container, Wrapper } from './styles';

const ThemeToggler: React.FC = () => {
  const { toogleTheme, selectedTheme } = useTheme();
  return (
    <Container onClick={toogleTheme} variant="filled" color="background">
      <Wrapper selectedTheme={selectedTheme}>
        <FiMoon id="toggler-sun" />
        <FiSun id="toggler-moon" />
      </Wrapper>
    </Container>
  );
};

export default ThemeToggler;
