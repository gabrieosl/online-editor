import React, { useState } from 'react';
import { MdEdit, MdSave, MdCancel, MdDelete } from 'react-icons/all';

import Button from '../Button';
import { Container } from './styles';

interface FileTitleProps {
  title: string;
  handleEditTitle(newValue: string): void;
  isEdited: boolean;
  handleSave(): void;
  handleDelete(): void;
}

const FileTitle: React.FC<FileTitleProps> = ({
  title,
  handleEditTitle,
  isEdited,
  handleSave,
  handleDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container>
      <div className="title-wrapper">
        {isEditing ? (
          <input
            value={title}
            onChange={e => handleEditTitle(e.target.value)}
          />
        ) : (
          <h2>{title}</h2>
        )}
        <Button
          variant="text"
          color="text"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? <MdCancel /> : <MdEdit />}
        </Button>
        <Button
          variant="text"
          color="text"
          onClick={handleSave}
          disabled={!isEdited}
        >
          <MdSave />
        </Button>
      </div>
      <Button
        variant="text"
        color="error"
        className="delete"
        onClick={handleDelete}
      >
        <MdDelete />
      </Button>
    </Container>
  );
};

export default FileTitle;
