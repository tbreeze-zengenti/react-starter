import React from 'react';
import AccordionItem from './components/accordionItem/accordionItem.component';
import { useAccordion } from './useAccordion.hook';
import styled from 'styled-components';

export type AccordionProps = {
  title?: string;
  items: {
    content: string;
    id: string;
    title: string;
  }[];
};

const Accordion = ({ items, title }: AccordionProps) => {
  const { openIds, toggleAllItems, toggleItem } = useAccordion({
    ids: items.map(i => i.id),
  });

  console.log(items.map(item => item.id).join(' '));

  return (
    <AccordionStyled className="accordion">
      {(title || items.length > 1) && (
        <header className="accordion__header">
          {title && <h2>{title}</h2>}
          {items.length > 1 && (
            <div className="accordion__toggle-wrap">
              <button
                aria-controls={items.map(item => item.id).join(' ')}
                className="accordion__toggle"
                onClick={() => toggleAllItems()}
              >
                {openIds.length !== items.length ? 'Open All' : 'Close All'}
              </button>
            </div>
          )}
        </header>
      )}
      <div className="accordion__items">
        {items.map(item => (
          <AccordionItem
            {...item}
            headingLevel={title ? 'h3' : 'h2'}
            isOpen={openIds.includes(item.id)}
            key={item.id}
            toggleIsOpen={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </AccordionStyled>
  );
};

const AccordionStyled = styled.div``;

export default Accordion;
