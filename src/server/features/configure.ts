import { Express } from 'express';
import sitemap from './sitemap';

const configureFeatures = (app: Express) => {
  if (!app) return null;
  sitemap(app);
};

export default configureFeatures;
