import { contentTypes } from './contentTypes.schema';

export const listings = {
  all: 'all',
};

export const minilists = {
  all: 'all',
};

export const listingPages = {
  [contentTypes.listingPage]: listings.all,
};

export const searchFacets = {
  all: 'all',
};

export const searchFilters = {};

export const freeTextWeights = {
  title: 100,
  description: 50,
};
