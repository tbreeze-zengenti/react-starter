import { ContensisNode } from '~/types/contensis.type';

export const navBarMapper = (nodes: ContensisNode[]): NavbarItemProps[] => {
  return nodes
    ?.filter(item => item.includeInMenu)
    ?.map(nodeItem => navbarItemMapper(nodeItem));
};

type NavbarItemProps = {
  id: string;
  label: string;
  path: string;
};

/**
 * Map top level siteview nodes
 * can be extended to include child nodes
 */
const navbarItemMapper = (node: ContensisNode): NavbarItemProps => {
  const { id, displayName, path } = node;
  return {
    id,
    label: displayName,
    path,
  };
};
