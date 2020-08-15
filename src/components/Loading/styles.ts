import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: translate(0deg);
  }
  to {
    transform: translate(360deg);
  }
`;

export const Container = styled.div`
  /* height: 100%; */
  /* width: 100%; */
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  svg#spinner {
    width: 45px;
    height: 45px;

    animation: ${spin} 0.5s infinite;
  }
`;
