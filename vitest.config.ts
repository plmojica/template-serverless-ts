/// <reference types="vitest" />
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    testTimeout: 30000,
    env: {
      API_URL: 'http://localhost:3000',
    },
  },
});
