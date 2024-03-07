import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/KW-work-portfolio-react/', // Adjust this according to your repository name
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
  },
});

