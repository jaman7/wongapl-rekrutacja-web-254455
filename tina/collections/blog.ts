import type { Collection } from 'tinacms';

export const BlogCollection: Collection = {
  name: 'blog',
  label: 'Blogs',
  path: 'src/content/blog',
  format: 'mdx',
  ui: {
    router({ document }) {
      return `/blog/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'string',
    },
    {
      name: 'pubDate',
      label: 'Publication Date',
      type: 'datetime',
    },
    {
      name: 'updatedDate',
      label: 'Updated Date',
      type: 'datetime',
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'image',
    },
    {
      name: 'author',
      label: 'Author',
      type: 'string',
    },
    {
      name: 'category',
      label: 'Category',
      type: 'string',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};
