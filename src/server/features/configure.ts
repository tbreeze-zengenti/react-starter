import { Express } from 'express';
import sitemap from './sitemap';
import robots from './robots';

const configureFeatures = (app: Express) => {
  if (!app) return null;
  robots(app);
  sitemap(app);
};

export default configureFeatures;
