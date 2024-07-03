import React from 'react';

import MainLayout from '~/layouts/main.layout';

import HomeStyled from './home.styled';

import { HomeProps, MappedHomeEntry } from './home.type';

import Form from '~/components/forms/Form';
import Link from '~/components/link/link';
import Meta from '~/components/meta/meta';

const Home = ({ mappedEntry }: HomeProps) => {
  const { title } = mappedEntry || ({} as MappedHomeEntry);
  return (
    <MainLayout>
      <HomeStyled className="flow">
        <Meta pageTitle="Home" />
        <h1>Welcome</h1>
        {title && <p>The homepage entry title is {title}!</p>}
        <Link path="/search">Navigate to search</Link>
        <Form formId="contactForm" />
      </HomeStyled>
    </MainLayout>
  );
};

export default Home;
