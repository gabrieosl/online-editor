import styled, { css } from 'styled-components';
import Button from '../Button';

export const Container = styled(Button)`
  width: 28px;
  height: 28px;
  overflow: hidden;
  z-index: 100;
`;

interface WrapperProps {
  selectedTheme: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;

  transform: translateX(25%);
  transition: 0.4s;

  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.text};
    flex-shrink: 0;
  }

  ${props =>
    props.selectedTheme === 'dark'
      ? css`
          transform: translateX(-25%);
          #toggler-sun {
            opacity: 0;
          }
        `
      : css`
          #toggler-moon {
            opacity: 0;
          }
        `}
`;
