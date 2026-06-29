import { defineConfig } from 'astro/config';

export default defineConfig({
  publicDir: './img',
  output: 'static',
  build: {
    format: 'directory'
  }
});
