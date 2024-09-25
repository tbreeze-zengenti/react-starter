import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { loadScript } from '~/util/loadScript';

export type CodeProps = {
  caption?: string;
  code: string;
  language: string;
};

type PrismTheme =
  | 'coy'
  | 'dark'
  | 'funky'
  | 'okaidia'
  | 'tomorrow'
  | 'twilight';

const Code = ({ code, language, caption }: CodeProps) => {
  const theme: PrismTheme = 'okaidia';
  const cdnRoot = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0';
  const prismJS = `${cdnRoot}/prism.min.js`;
  const prismAutoloaderJS = `${cdnRoot}/plugins/autoloader/prism-autoloader.min.js`;
  const prismThemeCSS = `${cdnRoot}/themes/prism-${theme}.min.css`;

  useEffect(() => {
    loadScript({
      id: `prism`,
      src: prismJS,
      position: 'body',
    });
    loadScript({
      id: `prism-autoloader`,
      src: prismAutoloaderJS,
      position: 'body',
    });
  }, [prismJS, prismAutoloaderJS]);

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={prismThemeCSS} />
      </Helmet>
      <CodeStyled className="code" as={caption ? 'figure' : 'div'}>
        <pre className="code__pre">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        {caption && (
          <figcaption className="code__caption">{caption}</figcaption>
        )}
      </CodeStyled>
    </>
  );
};

const CodeStyled = styled.div`
  ${() => {
    return css``;
  }}
`;

export default Code;
