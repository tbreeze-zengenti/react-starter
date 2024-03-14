import { ContensisAsset } from './asset.type';

export type ContensisImageAsset = ContensisAsset & {
  /** The default alt text defined for the image resource */
  altText?: string;
  sys: ContensisAsset['sys'] & {
    properties: ContensisAsset['sys']['properties'] & {
      height: number;
      width: number;
    };
  };
};
