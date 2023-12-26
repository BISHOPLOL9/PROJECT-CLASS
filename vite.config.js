// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: true,
  },
  build: {
    // If your index.html file is in the root, you don't need to include the `input` option
    // If it's elsewhere, you should specify the path like so:
     rollupOptions: {
       input: '/workspaces/PROJECT-CLASS/project-root/index.html',
     }
  }
});
