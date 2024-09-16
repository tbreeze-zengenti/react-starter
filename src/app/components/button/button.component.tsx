import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../link/link.component';
import { buttons } from '~/theme/buttons';

type ButtonProps = {
  className?: string;
  link?: string | null;
  children: React.ReactChild | null;
  buttonTheme: 'primary' | 'secondary';
  onClick: () => void;
};

const Button = ({
  className,
  link,
  children,
  buttonTheme = 'primary',
  onClick,
}: ButtonProps) => {
  const buttonClass = `button theme--${buttonTheme} ${className}`;

  return link ? (
    <ButtonLinkStyled
      className={buttonClass}
      buttonTheme={buttonTheme}
      onClick={onClick}
      path={link}
    >
      {children}
    </ButtonLinkStyled>
  ) : (
    <ButtonStyled
      className={buttonClass}
      buttonTheme={buttonTheme}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

const baseButtonStyles = ({ buttonTheme }: ButtonProps) => {
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
