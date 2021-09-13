import React from 'react';
import mapEntriesToResults from '../transformations';
import { SearchProps, withSearch } from '@zengenti/contensis-react-base/search';
import uniqueID from '~/core/util/unique';
import Link from '~/features/link';

type ResultCard = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const SearchContainer = ({ results }: SearchProps<ResultCard>) => {
  return (
    <div>
      <h1>Search1</h1>
      {results.map(result => (
        <div key={uniqueID()}>
          <p>
            <Link path={result.link}>{result.title}</Link>
          </p>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default withSearch(mapEntriesToResults)(SearchContainer);
