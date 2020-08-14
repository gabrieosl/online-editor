import styled, { css } from 'styled-components';

interface SideBarProps {
  isBarHidden: boolean;
}

export const Container = styled.div<SideBarProps>`
  height: 100%;
  width: 300px;
  overflow-y: auto;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 0 1rem;
  border-right: 1px solid ${props => props.theme.default};
  transition: 0.5s;

  h4 {
    margin: 1rem;
  }

  button#toggle-sidebar {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 1rem;
  }

  ${props =>
    props.isBarHidden &&
    css`
      margin-left: -266px;
    `}
`;
