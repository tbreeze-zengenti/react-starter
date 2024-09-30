import { useEffect, useState } from 'react';

type PaginationItem = {
  ariaLabel: string;
  className: string;
  disabled?: boolean;
  id: string | number;
  index: number;
  isActive?: boolean;
  label: string;
};

const prev = ({
  ariaLabel,
  label,
  pageIndex,
}: {
  ariaLabel: string;
  label: string;
  pageIndex: number;
}): PaginationItem => ({
  ariaLabel: ariaLabel.replace(/{{.?pageIndex.?}}/, pageIndex.toString()),
  className: 'prev',
  disabled: pageIndex > 0 ? false : true,
  id: 'prev',
  index: pageIndex - 1,
  label,
});

const next = ({
  ariaLabel,
  label,
  pageCount,
  pageIndex,
}: {
  ariaLabel: string;
  label: string;
  pageCount: number;
  pageIndex: number;
}): PaginationItem => ({
  ariaLabel: ariaLabel.replace(/{{.?pageIndex.?}}/, (pageIndex + 2).toString()),
  className: 'next',
  disabled: pageIndex < pageCount - 1 ? false : true,
  id: 'next',
  index: pageIndex + 1,
  label,
});

const first = ({ ariaLabel }: { ariaLabel: string }): PaginationItem => ({
  ariaLabel: ariaLabel.replace(/{{.?pageIndex.?}}/, '1'),
  className: 'first',
  id: 'first',
  index: 0,
  label: '1',
});

const last = ({
  ariaLabel,
  pageCount,
}: {
  ariaLabel: string;
  pageCount: number;
}): PaginationItem => ({
  ariaLabel: ariaLabel.replace(/{{.?pageIndex.?}}/, pageCount.toString()),
  className: 'last',
  id: 'last',
  index: pageCount - 1,
  label: pageCount?.toString(),
});

const labels = {
  next: 'Next',
  prev: 'Previous',
};

const ariaLabels = {
  first: 'Go to first page (page {{pageIndex}})',
  last: 'Go to last page (page {{pageIndex}})',
  next: 'Go to next page (page {{pageIndex}})',
  prev: 'Go to previous page (page {{pageIndex}})',
  goToPage: 'Go to page',
};

export const usePagination = ({
  pageCount,
  pageIndex,
  pagesToShow = 3,
}: {
  pageCount: number;
  pageIndex: number;
  pagesToShow?: number;
}) => {
  const [_prev, _setPrev] = useState<PaginationItem | null>(null);

  const [_next, _setNext] = useState<PaginationItem | null>(null);

  const [_first, _setFirst] = useState<PaginationItem | null>(null);

  const [_last, _setLast] = useState<PaginationItem | null>(null);

  const [_pages, _setPages] = useState<PaginationItem[]>([]);

  useEffect(() => {
    if (!pageCount) return;

    let startPage = Math.ceil(pageIndex - pagesToShow / 2);
    if (startPage < 0) {
      startPage = 0;
    }

    let endPage = startPage + pagesToShow - 1;

    if (endPage > pageCount - 1) {
      endPage = pageCount - 1;
      startPage = pageCount - pagesToShow;
      if (startPage < 0) {
        startPage = 0;
      }
    }

    _setFirst(startPage > 0 ? first({ ariaLabel: ariaLabels.first }) : null);
    _setLast(
      endPage !== pageCount - 1
        ? last({ ariaLabel: ariaLabels.last, pageCount })
        : null
    );
    _setNext(
      next({
        ariaLabel: ariaLabels.next,
        label: labels.next,
        pageCount,
        pageIndex,
      })
    );
    _setPrev(
      prev({ ariaLabel: ariaLabels.prev, label: labels.prev, pageIndex })
    );

    _setPages(
      Array.from(Array(endPage - startPage + 1)).map((_i, i) => {
        const index = i + startPage;
        const isActive = index === pageIndex;

        return {
          ariaLabel: `${ariaLabels.goToPage} ${index + 1}`,
          className: 'page',
          disabled: isActive,
          id: index,
          index,
          isActive,
          label: `${index + 1}`,
        };
      })
    );
  }, [pageIndex, pagesToShow, pageCount]);

  return {
    prev: _prev,
    next: _next,
    first: _first,
    last: _last,
    pages: _pages,
  };
};
