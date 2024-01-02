## 🍃 Contensis Delivery API

When writing your own backing code that makes calls to the Delivery API, we strongly recommend using the exports available in `contensis-react-base/util` package. They have been updated to provide full TypeScript intellisense which is invaluable for both TypeScript and JavaScript developers.

### Strongly recommended approach

The methods available in these imports allow us to make the simple api calls we need to surface regular content that provides a wrapped instance of `contensis-delivery-api` [npm package](https://www.npmjs.com/package/contensis-delivery-api) JavaScript client that works with your app.


To make calls to the Delivery API import like this
``` typescript
import { deliveryApi } from '@zengenti/contensis-react-base/util';
```

The next example provides a similar Delivery API implementation except calls made client-side are cached locally until the next page reload preventing needless duplicate api calls
``` typescript
import { cachedSearch } from '@zengenti/contensis-react-base/util';
```

Alternatively, calling `getClientConfig()` will provide a Delivery API Config that can be used to create a 'connected' instance of the normal [delivery api client](https://github.com/contensis/contensis-delivery-api#examples) so you could access any part of the Delivery API that might not be available in the above imports like this

``` typescript
import { Client } from 'contensis-delivery-api';
import { getClientConfig } from '@zengenti/contensis-react-base/util';

const client = Client.create(getClientConfig());
```

You can see an example implementation here: https://gitlab.zengenti.com/starter-projects/react-starter/-/blob/master/src/app/redux/siteConfig/sagas.ts

Use any of these approaches that work best for your implementation.

### Why it's recommended

#### Zero config

The imported method will already be connected to the default `ALIAS` and `PROJECT` provided in the `.env` file with the necessary credentials to make everything work. You don't need to do anything to instantiate and authenticate your Delivery client, these methods should just work with your app.

#### Cache invalidation

These methods contain special response handlers that, in pages that use server-side rendering in production, will ensure these pages are rendered with the necessary headers and keys that will allow the cached server-rendered content to become invalidated when any of the content requested by that page changes.

Any other method used to fetch and render data from the Delivery API will not contain the response handlers to handle server-side cache invalidation and as such cannot guarantee pages that were server-rendered will not become instantly invalidated when that requested content has changed in the CMS. Instead these pages could take up to 1 hour in production to reflect changes made to the content fetched directly from the API using other methods.

Pages that contain content that is rendered purely client-side is unaffected by this issue but using these methods ensure the cache invalidation will perform optimally should any of this content become server-rendered in the future.

#### Existing pattern

These exported methods have existed as long as we have been using React for writing our web apps. They have been used a lot across many implementations and have been developed and enhanced many times and are designed to work best with Contensis Cloud deployments.

We strongly urge you to refactor existing similar implementations to use these imported methods from `contensis-react-base/util` to get the best experience with deployments to Contensis Cloud.

#### Future-proofing

Having these wrapped methods available as imports from `contensis-react-base` package means everybody can get the same experience without updating tons of app code each time we want to introduce new features or need to fix any existing bugs.

#### Secure Delivery API

This feature is currently under development and is dependent on importing wrapped methods as above for fetching sensitive content from the Delivery API in your own backing code.
