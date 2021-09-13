import React from 'react';

// Styled components
import HomeStyled from './home.styled';

// Models
import { Props } from './home.d';
import Link from '~/features/link';

const Home = ({ entry }: Props) => {
  const { title } = entry || {};

  return (
    <HomeStyled>
      <h1>Welcome</h1>
      {title && <p>The homepage entry title is {title}!</p>}
      <Link path="/search">Navigate to search</Link>
    </HomeStyled>
  );
};

export default Home;
