import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../link/link.component';
import { buttons } from '~/theme/buttons';

type ButtonElement = HTMLButtonElement & HTMLLinkElement;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonTheme?: 'primary' | 'secondary';
  children: React.ReactChild;
  className?: string;
  path?: string;
};

const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { children, buttonTheme = 'primary', className, path } = props;
    const buttonClass = `button theme--${buttonTheme} ${className ? className : ''}`;

    return path ? (
      <ButtonLinkStyled {...props} className={buttonClass}>
        {children}
      </ButtonLinkStyled>
    ) : (
      <ButtonStyled {...props} ref={forwardedRef} className={buttonClass}>
        {children}
      </ButtonStyled>
    );
  }
);

Button.displayName = 'Button';

export default Button;

const baseButtonStyles = ({ buttonTheme = 'primary' }: ButtonProps) => {
  return css`
    display: inline-block;
    text-decoration: none;
    background-color: ${buttons[buttonTheme].default.background};
    border: 2px solid ${buttons[buttonTheme].default.border};
    color: ${buttons[buttonTheme].default.textColor};
    padding: ${p => p.theme.spacing.xs};
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border: 2px solid ${buttons[buttonTheme].hover.border};
      background-color: ${buttons[buttonTheme].hover.background};
      color: ${buttons[buttonTheme].hover.textColor};
    }
  `;
};

const ButtonStyled = styled.button`
  ${baseButtonStyles}
`;

const ButtonLinkStyled = styled(Link)<ButtonProps>`
  ${baseButtonStyles}
`;
