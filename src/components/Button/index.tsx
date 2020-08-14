import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'filled';
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'text'
    | 'background'
    | 'success';
  width?: string;
  height?: string;
}

interface StylesProps {
  variant: 'text' | 'outlined' | 'filled';
  color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'text'
    | 'background'
    | 'success';
  width?: string;
  height?: string;
}

const Container = styled.button<StylesProps>`
  width: ${props => props.width || 'unset'};
  height: ${props => props.height || 'unset'};
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 0 10px;
  box-shadow: ${props =>
    props.variant !== 'text' ? '1px 1px 2px rgba(0,0,0,0.2)' : 'none'};
  border: ${props =>
    props.variant === 'outlined' ? `2px solid ${props.theme[props.color]}` : 0};
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};

  background: ${props => props.theme.background};
  ${props =>
    props.variant === 'filled' &&
    css`
      background: ${props_ => props_.theme[props.color]};
      width: ${props.width};
    `};

  color: ${props => {
    if (props.variant === 'filled') return '#fff';
    return props.theme[props.color];
  }};

  ${props =>
    props.variant === 'text' &&
    css`
      background: none;
    `};
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  color = 'default',
  width,
  height,
  children,
  ...rest
}) => {
  return (
    <Container
      type="button"
      variant={variant}
      color={color}
      width={width}
      height={height}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
