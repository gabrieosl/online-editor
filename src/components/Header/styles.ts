import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.subBackground};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  color: ${props => props.theme.text};

  > div {
    display: flex;
    align-items: center;
  }
`;
