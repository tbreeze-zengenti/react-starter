const packagejson = require('../package.json');
const { urls } = require('@zengenti/contensis-react-base/util');

require('custom-env').env(process.env.env || process.env.npm_config_env);

const {
  PUBLIC_URL,
  ALIAS,
  INTERNAL_VIP,
  ACCESS_TOKEN,
  PROJECT,
  CONTENSIS_VERSION,
} = process.env;

const PROJECTS = env => [
  {
    id: env.PROJECT,
    publicUri: env.PUBLIC_URL,
  },
  // You only need to include extra projects in this array
  // if you wish to switch between projects at runtime,
  // or fetch data from another project
  // {
  //   id: 'mock',
  //   publicUri: 'mock.ludlow.ac.uk',
  // },
  // ˅˅˅˅˅˅˅˅
  // ˄˄˄˄˄˄˄˄
];

// any paths to proxy back to the classic IIS servers?
const REVERSE_PROXY_PATHS = Object([
  '/image-library/*',
  '/video-library/*',
  '/asset-library/*',
]);

const ALLOWED_GROUPS = {
  // 1 is Everyone, -1 is false (no security)
  website: [-1],
  mock: [-1],
};

// --------------------
// End of configuration
// --------------------

const url = urls(ALIAS, PROJECT);

const SERVERS = {
  alias: ALIAS,
  internalVip: INTERNAL_VIP,
  cms: url.cms,
  web: url.liveWeb,
  iis: url.iisWeb,
  previewIis: url.iisPreviewWeb,
};

const DELIVERY_API_CONFIG = {
  rootUrl: url.cms,
  accessToken: ACCESS_TOKEN,
  projectId: PROJECTS(process.env)[0].id,
  livePublishingRootUrl: url.previewWeb,
};


// Uncomment this if you need forms
// const FORM_API_CONFIG = {
//   rootUrl: 'https://cms-else.cloud.contensis.com/',
//   securityToken: '',
//   getFormUrl: '/REST/Contensis/content/GetFormSettings',
//   uploadFileUrl: '/REST/UI/FormsModule/UploadFile',
// };

const development = {
  __isBrowser__: true,
  DELIVERY_API_CONFIG,
  DISABLE_SSR_REDUX: false,
  PROJECTS: PROJECTS(process.env),
  ALLOWED_GROUPS,
  PROXY_DELIVERY_API: true,
  PUBLIC_URI: PUBLIC_URL,
  REVERSE_PROXY_PATHS,
  SERVERS,
  VERSION: packagejson.version,
  CONTENSIS_VERSION,
  // FORM_API_CONFIG,
};

const production = {
  __isBrowser__: false,
  DISABLE_SSR_REDUX: false,
  ALLOWED_GROUPS,
  PROXY_DELIVERY_API: true,
  REVERSE_PROXY_PATHS,
  VERSION: packagejson.version,
  // FORM_API_CONFIG,
  //CONTENSIS_VERSION: process.env.CONTENSIS_VERSION, We can't have this here as this causes the variable to be "baked-in" to the build and negates the point of having it in the env file
};

module.exports = {
  build: process.env.NODE_ENV == 'production' ? production : development,
  development,
  production,
  projects: PROJECTS,
};
