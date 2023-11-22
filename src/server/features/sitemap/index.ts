import { Express } from 'express';
import generateSitemap from './sitemap';

const sitemap = (app: Express) => {
  app.get('/sitemap.xml', (req, res) => {
    const project = PROJECTS[0].id;
    generateSitemap(project)
      .then(sitemap => {
        res.writeHead(200, {
          'Content-Type': 'application/xml',
          'Surrogate-Control': 'max-age=3600',
        });
        res.write(sitemap);
        res.end();
      })
      .catch(error =>
        res
          .status(500)
          .send(`Error occurred generating sitemap -- ${error.toString()}`)
      );
  });
};

export default sitemap;
