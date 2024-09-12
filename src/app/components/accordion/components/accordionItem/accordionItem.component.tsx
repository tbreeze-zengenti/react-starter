import React from 'react';
import styled from 'styled-components';

import RichText from '~/components/richText/richText.component';

export type AccordionItemProps = {
  content: string;
  headingLevel?: 'h2' | 'h3';
  id: string;
  isOpen?: boolean;
  title: string;
  toggleIsOpen: () => void;
};

const AccordionItem = ({
  content,
  headingLevel = 'h2',
  id,
  isOpen,
  title,
  toggleIsOpen,
}: AccordionItemProps) => {
  const Heading = headingLevel;

  return (
    <AccordionItemStyled className="accordion-item" isOpen={isOpen}>
      <Heading className="accordion-item__heading">
        <button
          aria-controls={id}
          aria-expanded={isOpen}
          className="accordion-item__button"
          id={`for--${id}`}
          onClick={toggleIsOpen}
        >
          {title}
          {/* <IconSVG svgSize={12} icon={isOpen ? 'Minus' : 'Plus'} /> */}
        </button>
      </Heading>
      <div className="accordion-item__content-container" aria-hidden={!isOpen}>
        <div
          aria-labelledby={`for--${id}`}
          className="accordion-item__content"
          id={id}
        >
          <RichText text={content} />
        </div>
      </div>
    </AccordionItemStyled>
  );
};

const AccordionItemStyled = styled.div<Pick<AccordionItemProps, 'isOpen'>>`
  .accordion-item__content-container {
    display: grid;
    grid-template-rows: ${p => (p.isOpen ? '1fr' : '0fr')};
    transition: grid-template-rows 0.3s ease-in-out;

    .accordion-item__content {
      overflow: hidden;
    }
  }
`;

export default AccordionItem;
