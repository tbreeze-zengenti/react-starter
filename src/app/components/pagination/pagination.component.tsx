import React from 'react';
import styled, { css } from 'styled-components';
import { SearchProps } from '@zengenti/contensis-react-base/models/search';

import { usePagination } from './usePagination.hook';
import { listReset } from '~/theme/patterns';

import Button from '../button/button.component';

export type PaginationProps = {
  pageIndex: number;
  pageCount: number;
  updatePageIndex: SearchProps['updatePageIndex'];
};

const Pagination = ({
  pageCount,
  pageIndex,
  updatePageIndex,
}: PaginationProps) => {
  const { pages, prev, first, last, next } = usePagination({
    pageCount,
    pageIndex,
  });

  if (pages.length < 2) return null;
  return (
    <PaginationStyled>
      {[prev, first, ...pages, last, next].map(item => {
        if (!item) return null;
        const { ariaLabel, className, disabled, isActive, id, index, label } =
          item;
        return (
          <li
            className={`pager__item ${className} ${isActive ? 'active' : ''}`}
            key={id}
          >
            {id === 'last' && (
              <EllipsisStyled
                forwardedAs="span"
                aria-hidden
                className="ellipsis"
              >
                ...
              </EllipsisStyled>
            )}
            <Button
              aria-current={isActive}
              aria-label={ariaLabel}
              disabled={disabled}
              onClick={e => {
                e.preventDefault();
                updatePageIndex(index, 'navigation-anchor');
              }}
              className={`pager__button ${className} ${isActive ? 'active' : ''}`}
            >
              <span className="pager__button-label">{label}</span>
            </Button>
            {id === 'first' && (
              <EllipsisStyled
                forwardedAs="span"
                aria-hidden
                className="ellipsis"
              >
                ...
              </EllipsisStyled>
            )}
          </li>
        );
      })}
    </PaginationStyled>
  );
};

const PaginationStyled = styled.ol`
  ${() => {
    return css`
      ${listReset};
      display: flex;

      .pager__button[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }
    `;
  }}
`;

const EllipsisStyled = styled(Button)`
  pointer-events: none;
`;

export default Pagination;
