import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../link/link.component';
import { buttons } from '~/theme/buttons';

type ButtonProps = {
  className?: string;
  link?: string | null;
  children: React.ReactChild | null;
  buttonTheme: 'primary' | 'secondary';
  buttonType: 'default' | 'pill';
  ariaLabel?: string;
  onClick: () => void;
};

const Button = ({
  className,
  link,
  children,
  buttonTheme = 'primary',
  buttonType = 'default',
  ariaLabel,
  onClick,
}: ButtonProps) => {
  const buttonClass = `button theme--${buttonTheme} type--${buttonType} ${className}`;

  return link ? (
    <ButtonLinkStyled
      className={buttonClass}
      buttonTheme={buttonTheme}
      buttonType={buttonType}
      onClick={onClick}
      path={link}
    >
      {children}
    </ButtonLinkStyled>
  ) : (
    <ButtonStyled
      className={buttonClass}
      buttonTheme={buttonTheme}
      buttonType={buttonType}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

const baseButtonStyles = ({ buttonTheme, buttonType }: ButtonProps) => {
  return css`
    display: inline-block;
    background-color: ${buttons[buttonTheme].default.background};
    color: ${buttons[buttonTheme].default.textColor};
    padding: ${p => p.theme.spacing.s} ${p => p.theme.spacing.m};
    border-radius: ${buttonType === 'pill' ? '5px' : '0'};
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
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
