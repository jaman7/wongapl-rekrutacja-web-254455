import type { Collection } from 'tinacms';
import IconComponent from '../components/IconComponent';

export const GlobalConfigCollection: Collection = {
  name: 'config',
  label: 'Global Config',
  path: 'src/content/config',
  format: 'json',
  ui: {
    global: true,
  },
  fields: [
    {
      name: 'seo',
      label: 'General site config',
      type: 'object',
      fields: [
        {
          name: 'title',
          label: 'Site title for SEO',
          type: 'string',
          required: true,
        },
        {
          name: 'description',
          label: 'Site description for SEO',
          type: 'string',
          required: true,
        },
        {
          name: 'siteOwner',
          label: 'Your Name, Company Name (Used in the footer',
          required: true,
          type: 'string',
          ui: {
            defaultValue: 'Your name here',
          },
        },
        // Add more settings here...
      ],
    },
    {
      name: 'nav',
      label: 'Site Navigation Menu (Reorder, Add, Remove)',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title,
          };
        },
      },
      fields: [
        {
          name: 'title',
          label: 'Title of Nav Item',
          type: 'string',
          required: true,
        },
        {
          name: 'link',
          label: 'Path of the Nav Item',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      name: 'contactLinks',
      label: 'Contact Links',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title,
          };
        },
      },
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'string',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'string',
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'string',
          ui: {
            //@ts-ignore
            component: IconComponent,
          },
        },
      ],
    },
    {
      name: 'footerText',
      label: 'Footer Text',
      type: 'rich-text',
      isBody: true,
      parser: { type: 'mdx' },
    },
    {
      name: 'footer',
      label: 'Footer Columns',
      type: 'object',
      fields: [
        {
          name: 'columns',
          label: 'Columns',
          type: 'object',
          list: true,
          fields: [
            {
              name: 'title',
              type: 'string',
              label: 'Column Title',
              required: true,
            },
            {
              name: 'links',
              label: 'Links',
              type: 'object',
              list: true,
              fields: [
                { name: 'title', type: 'string', label: 'Link Title', required: true },
                { name: 'link', type: 'string', label: 'Link URL or Text', required: true },
              ],
            },
          ],
        },
      ],
    },

    // Add other config fields here...
  ],
};
