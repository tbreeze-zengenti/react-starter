import { EntrySys } from 'contensis-delivery-api/lib/models';
import { PagedList } from 'contensis-core-api';

/**
 * Represents Contensis system properties with additional metadata and version information.
 */
export type ContensisSys = EntrySys & {
  metadata: { [key: string]: any };
  version: EntrySys['version'] & {
    archived?: string;
    archivedBy?: string;
    deleted?: string;
    deletedBy?: string;
  };
};

/**
 * Represents a Contensis entry.
 */
export type ContensisEntry = {
  entryThumbnail?: ContensisImage;
  entryDescription?: string;
  entryTitle: string;
  sys: ContensisSys;
};

/**
 * Represents a Contensis node with additional properties.
 */
export type ContensisNode = Omit<Node, 'title' | 'entryId'> & {
  children: ContensisNode[];
  displayName: string;
  isCanonical: boolean;
};

/**
 * Represents a Contensis paged list with additional properties.
 * @template T - The type of items in the paged list.
 */
export type ContensisPagedList<T> = PagedList<T> & { pageCount: number };

/**
 * Represents a Contensis image.
 */
export type ContensisImage = {
  altText?: string;
  asset: ContensisImageAsset;
  caption?: string;
  transformations?: unknown;
};

/**
 * Represents a Contensis asset with additional properties.
 */
export type ContensisAsset = ContensisEntry & {
  description?: string;
  keywords?: string[];
  title: string;
  sys: ContensisSys & {
    properties: {
      fileId: string;
      filename: string;
      filePath: string;
      fileSize: number;
    };
    metadata: ContensisSys['metadata'] & {
      includeInAToZ: boolean;
      includeInSearch: boolean;
      includeInSiteMap: boolean;
      includeInMenu: boolean;
      nodeId: string;
    };
  };
  thumbnail?: ContensisImageAsset;
};

/**
 * Represents a Contensis image asset with additional properties.
 */
export type ContensisImageAsset = ContensisAsset & {
  altText?: string;
  sys: ContensisAsset['sys'] & {
    properties: ContensisAsset['sys']['properties'] & {
      height: number;
      width: number;
    };
  };
};

/**
 * Represents a Contensis blockquote.
 */
export type ContensisBlockquote = {
  source?: string;
  text: string;
};

/**
 * Represents a Contensis composer field.
 */
export type ContensisComposerField = {
  type: string;
  value: any;
};
