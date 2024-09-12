import { ComponentAccordion } from '~/types/components/accordion.type';
import { AccordionProps } from './accordion.component';

export const accordionMapper = (
  component: ComponentAccordion
): AccordionProps => ({
  items: component.items.map((item, index) => ({
    content: item.content || '',
    id: `${item.title?.replace(/ /g, '-')?.toLowerCase()}-${index}`,
    title: item.title,
  })),
  title: component.title ?? undefined,
});
