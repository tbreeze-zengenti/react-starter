import { Express } from 'express';
import sitemap from './sitemap';

// Import and load any server-side features here
// We have an instance of the express app available to configure
const configureFeatures = (app: Express) => {
  if (!app) return null;
  sitemap(app);
};

export default configureFeatures;
