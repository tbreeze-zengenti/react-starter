import { ContensisEntry } from './entry.type';
import { ContensisImageAsset } from './imageAsset.type';
import { ContensisSys } from './sys.type';

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
