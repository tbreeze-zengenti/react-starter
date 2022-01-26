import React from 'react';

// Styled components
import HomeStyled from './home.styled';

// Models
import { HomeProps, MappedHomeEntry } from './home.d';
import Link from '~/components/link';

const Home = ({ mappedEntry }: HomeProps) => {
  const { title } = mappedEntry || ({} as MappedHomeEntry);
  return (
    <HomeStyled>
      <h1>Welcome</h1>
      {title && <p>The homepage entry title is {title}!</p>}
      <Link path="/search">Navigate to search</Link>
    </HomeStyled>
  );
};

export default Home;
