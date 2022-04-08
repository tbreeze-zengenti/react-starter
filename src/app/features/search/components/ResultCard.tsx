import React from 'react';
import Link from '~/components/link/link';
import { ResultCardProps } from './ResultCard.d';

const ResultCard = ({ description, image, link, title }: ResultCardProps) => {
  return (
    <div
      style={{
        maxWidth: '1024px',
        display: 'grid',
        gridTemplateColumns: '60px 7fr',
      }}
    >
      <div>
        {image && <img src={image} alt={title} style={{ width: '50px' }} />}
      </div>
      <div>
        <p>
          <Link uri={link}>{title}</Link>
        </p>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default ResultCard;
