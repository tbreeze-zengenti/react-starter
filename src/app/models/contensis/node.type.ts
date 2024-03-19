import { Node } from 'contensis-delivery-api/lib/models';

export type ContensisNode = Omit<Node, 'title' | 'entryId'> & {
  children: ContensisNode[];
  displayName: string;
  isCanonical: boolean;
};
