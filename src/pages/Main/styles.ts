import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: ${props => props.theme.background};
`;
