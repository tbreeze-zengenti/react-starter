import express, { type Express } from 'express';

const robots = (app: Express) => {
  app.use(
    '/robots.txt',
    express.static('dist/static/robots.txt', { maxAge: '86400s' })
  );
};

export default robots;
