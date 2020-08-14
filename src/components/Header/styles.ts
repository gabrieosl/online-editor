import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;

  background: ${props => props.theme.subBackground};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
`;
