import { functions } from './serverless/functions';

import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: '',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
  },
  functions,
  package: { individually: true },
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-iam-roles-per-function'],
};

module.exports = serverlessConfiguration;
