import React from 'react';

import { Container } from './styles';

interface DocumentProps {
  content: string;
  handleEditContent(newValue: string): void;
}

const Document: React.FC<DocumentProps> = ({ content, handleEditContent }) => {
  return (
    <Container>
      <textarea
        value={content}
        onChange={e => handleEditContent(e.target.value)}
      />
    </Container>
  );
};

export default Document;
