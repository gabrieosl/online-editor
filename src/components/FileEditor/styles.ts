import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  padding: 2rem;

  color: ${props => props.theme.text};
`;
