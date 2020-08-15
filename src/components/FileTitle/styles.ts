import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  div.title-wrapper {
    display: flex;
    align-items: center;
    color: ${props => props.theme.text};
  }

  svg {
    height: 25px;
    width: 25px;
  }
`;
