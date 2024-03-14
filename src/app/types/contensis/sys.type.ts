import { EntrySys } from 'contensis-delivery-api/lib/models';

export type ContensisSys = EntrySys & {
  metadata: { [key: string]: any };
  version: EntrySys['version'] & {
    archived?: string;
    archivedBy?: string;
    deleted?: string;
    deletedBy?: string;
  };
};
