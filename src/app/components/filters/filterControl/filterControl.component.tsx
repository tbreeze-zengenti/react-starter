import React from 'react';
import styled, { css } from 'styled-components';

export type FilterControlProps = {
  checked: boolean;
  className?: string;
  disabled?: boolean;
  id: string;
  label: string;
  mixed?: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  type: 'checkbox' | 'radio';
};

const FilterControl = ({
  checked,
  className,
  disabled = false,
  id,
  label,
  mixed = false,
  onChange,
  type = 'checkbox',
}: FilterControlProps) => {
  return (
    <FilterControlStyled className={`${type} ${className ? className : ''}`}>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        {...(type === 'checkbox' && !checked && mixed
          ? { 'aria-checked': 'mixed' }
          : {})}
      />
      <label htmlFor={id}>{label}</label>
    </FilterControlStyled>
  );
};

const FilterControlStyled = styled.div`
  ${() => {
    return css`
      label {
        padding-inline-start: 0.5em;
      }

      input[type='radio'],
      input[type='checkbox'] {
        -webkit-appearance: none;
        appearance: none;
        background: #fff; /** This is needed for iOS. Otherwise the background just becomes black. */
        border: 1px solid #333;
        height: 1.5em;
        width: 1.5em;
        display: inline-block;
        border-radius: 100%;
        vertical-align: text-bottom;
        position: relative;

        &[disabled],
        &[aria-disabled='true'] {
          opacity: 0.4;
        }

        &::before {
          content: '';
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          top: 0;
        }

        &:focus {
          outline: 2px solid;
          outline-offset: 2px;
        }
      }

      input[type='checkbox'] {
        border-radius: 10%;
      }

      input[type='radio']::before {
        height: 0;
        width: 0;
      }

      input[type='radio']:checked::before {
        border: 5px solid transparent;
        border-radius: 100%;
        outline-offset: -6px;
        background: #000;
      }

      input[type='checkbox']:indeterminate::before,
      input[type='checkbox'][aria-checked='mixed']::before {
        border: 2px solid #222;
        height: 0;
        width: 40%;
      }

      input[type='checkbox']:checked::before {
        border-right: 3px solid #000;
        border-bottom: 3px solid #000;
        height: 50%;
        width: 30%;
        transform: rotate(45deg) translateY(-20%) translateX(-10%);
      }
    `;
  }}
`;

export default FilterControl;
