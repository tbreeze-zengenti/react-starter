import React from 'react';
import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Helmet } from 'react-helmet';
import MainLayout from '~/templates/main/main.template';
import Composer from '~/components/composer/composer.component';
import { ComposerProps } from '~/components/composer/composer.types';
import type { MetaProps } from '~/components/meta/meta.component';
import ContentTemplateStyled from './content.styled';
import { Canvas } from '~/components';
import type { CanvasProps } from '~/components/canvas/canvas.component';

export type ContentTemplateProps = {
  meta: MetaProps;
  title: string;
  composer: ComposerProps;
  canvas?: CanvasProps;
};

const Content = ({
  mappedEntry,
}: RouteComponentProps<ContentTemplateProps>) => {
  const { meta, title, composer, canvas } =
    mappedEntry || ({} as ContentTemplateProps);
  console.log(composer);
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
            {composer ? <Composer {...composer} /> : null}

            {canvas ? <Canvas {...canvas} /> : null}
          </div>
        </ContentTemplateStyled>
      </MainLayout>
    </>
  );
};

export default Content;
