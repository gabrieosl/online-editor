import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  svg#spinner {
    width: 45px;
    height: 45px;
    animation: ${spin} 2s;
  }
`;
