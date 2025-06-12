import type { Collection } from 'tinacms';

export const footerCollection: Collection = {
  label: 'Footer',
  name: 'footer',
  path: 'src/content/footer',
  format: 'mdx',
  ui: {
    allowedActions: { create: false, delete: false }, // tylko edycja
  },
  fields: [
    {
      name: 'body',
      label: 'Footer Text',
      type: 'rich-text',
      isBody: true,
    },
  ],
};
