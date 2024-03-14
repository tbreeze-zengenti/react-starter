import { ContensisImageAsset } from './imageAsset.type';

export type ContensisImage = {
  altText?: string;
  asset: ContensisImageAsset;
  caption?: string;
  transformations?: unknown;
};
