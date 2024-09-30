import React from 'react';
import styled, { css } from 'styled-components';
import { SearchProps } from '@zengenti/contensis-react-base/models/search';

import FilterControl from './filterControl/filterControl.component';

export type FilterGroupProps = {
  title: string;
  filters: SearchProps['filters'];
  updateSelectedFilters: SearchProps['updateSelectedFilters'];
};

const FilterGroup = ({
  filters,
  title,
  updateSelectedFilters,
}: FilterGroupProps) => {
  return (
    <FilterGroupStyled>
      <legend>{title}</legend>
      {Object.keys(filters).map(filterKey => {
        const filter = filters[filterKey];
        const isSingleSelect = filter.isSingleSelect;
        const isRenderable = filter.renderable;

        if (isRenderable === false) return null;

        if (filter.items) {
          return filter.items.map(f => {
            return (
              <FilterControl
                type={isSingleSelect ? 'radio' : 'checkbox'}
                key={f.key}
                id={f.key}
                checked={f.isSelected}
                label={f.title ?? f.key}
                onChange={() => updateSelectedFilters(filterKey, f.key)}
              />
            );
          });
        }
      })}
    </FilterGroupStyled>
  );
};

const FilterGroupStyled = styled.fieldset`
  ${() => {
    return css``;
  }}
`;

export default FilterGroup;
