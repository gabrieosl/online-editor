import React from 'react';
import { FaSpinner } from 'react-icons/all';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <FaSpinner id="spinner" />
    </Container>
  );
};

export default Loading;
