import React from 'react';

//styles
import HomeStyled from './home.styled';

// Models
import { Props } from './Home.d';

const Home = ({ entry }: Props) => {
  const { title } = entry || {};

  return (
    <HomeStyled>
      <h1>Welcome</h1>
      {title && <p>The homepage entry title is {title}!</p>}
    </HomeStyled>
  );
};

export default Home;
