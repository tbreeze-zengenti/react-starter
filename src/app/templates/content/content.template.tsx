import React from 'react';
import { Helmet } from 'react-helmet';

import MainLayout from '~/templates/main/main.template';

import ContentPageStyled from './content.styled';

import { MappedEntry } from '~/models/global/mappedEntry.type';
import { MetaProps } from '~/components/meta/meta.types';

import Link from '~/components/link/link';
import { ComposerProps } from '~/components/composer/composer.types';
import Composer from '~/components/composer/composer';

export type ContentPageProps = {
  meta: MetaProps;
  title: string;
  body: ComposerProps;
};

const Content = ({ mappedEntry }: MappedEntry<ContentPageProps>) => {
  const { meta, title, body } = mappedEntry || {};
  console.log(body);
  return (
    <MainLayout meta={meta}>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <ContentPageStyled>
          <div className="wrapper">
            <div className="logo">
              <h1>{title}</h1>
            </div>
            <div className="composer">
              <Composer {...body} />
            </div>
          </div>
        </ContentPageStyled>
      </>
    </MainLayout>
  );
};

export default Content;
