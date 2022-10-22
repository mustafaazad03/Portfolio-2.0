import {
    createCurrentUserHook,
    createClient,
} from 'next-sanity'

import imageUrlBuilder from "@sanity/image-url";

export const client = {
    projectId: process.env.NEXT_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-10-12',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN,
}

export const sanityClient = createClient(client);
export const urlFor = (source) => imageUrlBuilder(client).image(source);
export const useCurrentUser = createCurrentUserHook(client);