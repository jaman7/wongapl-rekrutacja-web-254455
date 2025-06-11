import type { Collection } from 'tinacms';

export const FooterLinksCollection: Collection = {
  label: 'Footer Links',
  name: 'footerLinks',
  path: 'src/content/footer-links',
  format: 'json',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      required: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'string',
      required: true,
    },
  ],
};
