import React from 'react';
import Link from '~/components/link';

interface ResultCardProps {
  description: string;
  image: string;
  key?: string;
  link: string;
  title: string;
}
const ResultCard = ({
  description,
  image,
  key,
  link,
  title,
}: ResultCardProps) => {
  return (
    <div
      key={key}
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
          <Link path={link}>{title}</Link>
        </p>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default ResultCard;
