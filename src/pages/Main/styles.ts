import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: ${props => props.theme.background};
`;

export const Footer = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${props => props.theme.subBackground};
  color: ${props => props.theme.text};

  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.text};
  }
`;
