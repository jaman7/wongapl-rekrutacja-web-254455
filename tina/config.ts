import { defineConfig } from 'tinacms';
import { BlogCollection } from './collections/blog';
import { footerCollection } from './collections/footer';
import { GlobalConfigCollection } from './collections/global-config';
import { PageCollection } from './collections/page';

const branch = process.env.GITHUB_BRANCH || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [BlogCollection, PageCollection, GlobalConfigCollection, footerCollection],
  },
});
