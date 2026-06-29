import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://negoce-rim.netlify.app',
  publicDir: 'img',
  integrations: [sitemap()],
  output: 'static'
});
