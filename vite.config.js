import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://kwubbenhorst.github.io/KW-work-portfolio-react',
  plugins: [react()],
});
