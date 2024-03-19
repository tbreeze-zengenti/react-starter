import { ContensisImage } from './image.type';
import { ContensisSys } from './sys.type';

export type ContensisEntry = {
  entryThumbnail?: ContensisImage;
  entryDescription?: string;
  entryTitle: string;
  sys: ContensisSys;
};
