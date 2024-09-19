import React from 'react';
import styled from 'styled-components';
import Link from '~/components/link/link.component';

export type BlockquoteProps = {
  quote: React.JSX.Element | string;
  source?: string;
  citation?: string;
  url?: string;
};

const Blockquote = ({ citation, quote, source, url }: BlockquoteProps) => {
  return (
    <BlockquoteStyled className="quote" cite={url}>
      <p className="quote__text">
        <span>{quote}</span>
      </p>
      {(source || citation) && (
        <footer className="quote__footer">
          {source && <span className="quote__source">{source}</span>}
          {source && citation && ' '}
          {citation && (
            <cite className="quote__cite">
              {url ? (
                <Link className="quote__cite__link" path={url}>
                  {citation}
                </Link>
              ) : (
                citation
              )}
            </cite>
          )}
        </footer>
      )}
    </BlockquoteStyled>
  );
};

export const BlockquoteStyled = styled.blockquote`
  border-left: 4px solid red;
`;

export default Blockquote;
