import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '~/templates/main/main.template';
import type { MappedEntry } from '~/util/mappedEntry.type';
import Composer from '~/components/composer/composer.component';
import { ComposerProps } from '~/components/composer/composer.types';
import type { MetaProps } from '~/components/meta/meta.component';
import ContentTemplateStyled from './content.styled';

export type ContentTemplateProps = {
  meta: MetaProps;
  title: string;
  body: ComposerProps;
};

const Content = ({ mappedEntry }: MappedEntry<ContentTemplateProps>) => {
  const { meta, title, body } = mappedEntry || {};
  console.log(body);
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <MainLayout meta={meta}>
        <ContentTemplateStyled>
          <div className="wrapper">
            <div className="logo">
              <h1>{title}</h1>
            </div>
            <Composer {...body} />
          </div>
        </ContentTemplateStyled>
      </MainLayout>
    </>
  );
};

export default Content;
