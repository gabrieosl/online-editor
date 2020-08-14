import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 30%;
  max-width: 400px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background: red;
`;

export const File = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  background: pink;
`;
