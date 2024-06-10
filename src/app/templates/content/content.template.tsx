import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '~/templates/main/main.template';
import ContentTemplateStyled from './content.styled';
import { Canvas, Composer } from '~/components';
import type { RouteComponentProps } from '@zengenti/contensis-react-base';
import type { MetaProps } from '~/components/meta/meta.component';
import type { ComposerProps } from '~/components/composer/composer.types';
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

            <div className="bento-boxes">
              {composer ? (
                <article className="bento-box">
                  <Composer {...composer} />
                </article>
              ) : null}

              {canvas ? (
                <article className="bento-box">
                  <Canvas {...canvas} />
                </article>
              ) : null}
            </div>
          </div>
        </ContentTemplateStyled>
      </MainLayout>
    </>
  );
};

export default Content;
