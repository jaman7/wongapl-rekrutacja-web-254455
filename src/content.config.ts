import { defineCollection, z } from 'astro:content';
import client from '../tina/__generated__/client';

const blog = defineCollection({
  loader: async () => {
    const postsResponse = await client.queries.blogConnection();

    return postsResponse.data.blogConnection.edges
      ?.filter((post) => !!post)
      .map((post) => {
        const node = post?.node;

        return {
          ...node,
          id: node?._sys.relativePath.replace(/\.mdx?$/, ''),
          tinaInfo: node?._sys,
        };
      });
  },
  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().nullish(),
    author: z.string(),
    category: z.string(),
  }),
});

const page = defineCollection({
  loader: async () => {
    const postsResponse = await client.queries.pageConnection();

    return postsResponse.data.pageConnection.edges
      ?.filter((p) => !!p)
      .map((p) => {
        const node = p?.node;

        return {
          ...node,
          id: node?._sys.relativePath.replace(/\.mdx?$/, ''),
          tinaInfo: node?._sys,
        };
      });
  },
  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    seoTitle: z.string(),
    body: z.any(),
  }),
});

export const collections = { blog, page };
