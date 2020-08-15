import React, { useState, useEffect } from 'react';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '../../redux';

import FileContainer from './File';
import Button from '../Button';
import Loading from '../Loading';

import { refreshFiles } from '../../redux/files/actions';

import { Container } from './styles';

interface FileProps {
  id: number;
  name: string;
  isDirectory: boolean;
  children?: FileProps[];
  content?: string;
}

const SideBar: React.FC = () => {
  const { t } = useTranslation('common');
  const [isBarHidden, setIsBarHidden] = useState(false);

  const dispach = useDispatch();

  const { data: files, loading } = useSelector(
    (state: RootState) => state.files.allFiles,
  );

  useEffect(() => {
    dispach(refreshFiles());
  }, [dispach]);

  return loading ? (
    <Loading />
  ) : (
    <Container isBarHidden={isBarHidden}>
      <h4>{t('file-tree')}</h4>
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
