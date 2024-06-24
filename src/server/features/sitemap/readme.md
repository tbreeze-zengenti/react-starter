# Sitemap

A Sitemap for your application is automatically generated and will exist at `/sitemap.xml` in a production environment. The source for generation is any entry with a valid `sys.uri` along with every `path` within StaticRoutes.

**Options for the Sitemap can be controlled from the config file: `sitemap.config.ts`.**

## Options

Available options in the config:

- `languages`: specify the languages your project supports
- `noIndexField`: by supplying the field ID your app uses for declaring entries as `noindex` the Sitemap will omit those from the final output.
- `priorityMap`: this mapping allows you to define Sitemap specific values to paths or Content Type IDs.
- `additions`: an array of additional URLs that should exist in your Sitemap, useful for microsites on the same domain
- `excludeContentTypes`: a list of Content Type ID's that should be excluded from the Sitemap
- `excludePaths`: a list of Static Routes or paths that should be excluded from the Sitemap
