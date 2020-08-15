import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: blue;

  display: flex;
  align-items: stretch;

  textarea {
    flex: 1;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }
`;
