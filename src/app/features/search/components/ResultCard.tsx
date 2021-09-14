import React from 'react';
import Link from '~/features/link';
interface IProps {
  title: string;
  image: string;
  link: string;
}
const ResultCard = ({ title, image, link }: IProps) => {
  return (
    <div
      style={{
        maxWidth: '500px',
        display: 'grid',
        gridTemplateColumns: '60px 7fr',
      }}
    >
      <div>
        {image && <img src={image} alt={title} style={{ width: '50px' }} />}
      </div>
      <div>
        <Link path={link} text={title}></Link>
      </div>
    </div>
  );
};

export default ResultCard;
