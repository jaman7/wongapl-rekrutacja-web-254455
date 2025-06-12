import type { Collection } from 'tinacms';

export const PageCollection: Collection = {
  name: 'page',
  label: 'Pages',
  path: 'src/content/page',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: 'seoTitle',
      type: 'string',
      required: true,
    },
    {
      name: 'body',
      type: 'rich-text',
      isBody: true,
      required: true,
    },
    {
      type: 'object',
      name: 'hero',
      label: 'Hero Section',
      fields: [
        { type: 'string', name: 'title', label: 'Title' },
        { type: 'string', name: 'subtitle', label: 'Subtitle' },
        {
          type: 'object',
          name: 'buttons',
          label: 'Buttons',
          list: true,
          fields: [
            { type: 'string', name: 'label', label: 'Label' },
            { type: 'string', name: 'href', label: 'Link' },
            {
              type: 'string',
              name: 'variant',
              label: 'Style',
              options: ['primary', 'secondary'],
            },
          ],
        },
        {
          type: 'image',
          name: 'backgroundImage',
          label: 'Background Image (PNG)',
        },
        {
          type: 'string',
          name: 'textColor',
          label: 'Text Color',
          ui: { component: 'color' },
        },
      ],
    },
    {
      type: 'object',
      name: 'features',
      label: 'Features Section',
      list: true,
      fields: [
        { type: 'string', name: 'title', label: 'Title' },
        { type: 'string', name: 'description', label: 'Description' },
      ],
    },
    {
      type: 'object',
      name: 'testimonials',
      label: 'Testimonials Section',
      list: true,
      fields: [
        { type: 'string', name: 'author', label: 'Name' },
        { type: 'string', name: 'role', label: 'Role / Title' },
        { type: 'image', name: 'avatar', label: 'Photo' },
        { type: 'string', name: 'quote', label: 'Quote' },
      ],
    },
    {
      type: 'object',
      name: 'section1',
      label: 'Section 1',
      fields: [
        { type: 'string', name: 'title', label: 'Title' },
        { type: 'string', name: 'subtitle', label: 'Subtitle' },
        { type: 'image', name: 'image', label: 'Photo' },
      ],
    },
    {
      type: 'object',
      name: 'section2',
      label: 'Section 2',
      fields: [
        { type: 'string', name: 'title', label: 'Title' },
        { type: 'string', name: 'subtitle', label: 'Subtitle' },
        { type: 'image', name: 'image', label: 'Photo' },
      ],
    },
    {
      type: 'object',
      name: 'section3',
      label: 'Section 3',
      fields: [
        { type: 'string', name: 'title', label: 'Title' },
        { type: 'string', name: 'subtitle', label: 'Subtitle' },
        { type: 'image', name: 'image', label: 'Photo' },
      ],
    },
    {
      type: 'object',
      name: 'aboutSections',
      label: 'About Content Sections',
      list: true,
      fields: [
        { type: 'string', name: 'title', label: 'Title' },
        { type: 'image', name: 'image', label: 'Image' },
        {
          type: 'string',
          name: 'content',
          label: 'Text',
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
  ],
};
