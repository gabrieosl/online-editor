import styled from 'styled-components';

interface LeafProps {
  level: number;
}

export const Leaf = styled.div<LeafProps>`
  display: flex;
  padding-left: ${props => `${props.level * 0.6}rem`};

  &:hover {
    background: ${props => props.theme.subBackground};
  }

  button {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 3px 0;
  }
  button svg,
  span {
    color: ${props => props.theme.text};
  }
  svg {
    margin-right: 4px;
  }
`;
