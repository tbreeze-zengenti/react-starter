# Sitemap

A Sitemap for your application is automatically generated and will exist at `/sitemap.xml` in a production environment.

**Options for the Sitemap can be controlled from the config file: `sitemap.config.ts`.**

## Source

The source for generation is any entry with a valid `sys.uri` along with every `path` within StaticRoutes.

## Excluding URLs

To exclude URLs there is an active method and a static method:

### Active

Utilise the `noIndexField` variable (`~/src/app/schemas/fields.schema.ts`) to define a boolean field on your Entries that is used for declaring whether an entry should render a `noindex` tag. This behaviour can be handled by the Meta component included in this project by default. The sitemap will respect the `noindex` value to determine whether a URL should be excluded from the sitemap.

### Static

The `skipPaths` variable inside `sitemap.ts` can be used to ensure paths are ommitted from the final sitemap. Every URL added to the skip paths array _must_ have a leading `/`.

## Options

Available options in the config:

- `languages`: specify the languages your project supports
- `noIndexField`: specify the field where your noindex boolean exists
- `priorityMap`: define priorities or changefreq paramters for paths or content type IDs
- `exclusions`: static paths to be excluded from the sitemap
