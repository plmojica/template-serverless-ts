import type { AWS } from '@serverless/typescript';

/**
 * This file contains values that are used in other parts of the
 * Serverless configuration as well as configuration of other plugins.
 */

export const custom: AWS['custom'] = {
  esbuild: {
    bundle: true,
    minify: false,
    sourcemap: true,
    exclude: ['aws-sdk'],
    target: 'node16',
    define: { 'require.resolve': undefined },
    platform: 'node',
    concurrency: 1,
  },
};
