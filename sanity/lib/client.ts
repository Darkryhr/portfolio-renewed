import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const urlFor = src => imageUrlBuilder(client).image(src);
