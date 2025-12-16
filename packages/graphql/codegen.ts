import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // 👇 FIX: Point to the generated file, NOT the TS file
  schema: './schema.graphql',

  documents: ['./gql/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './gql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
      ],
      config: {
        reactQueryVersion: 5,
        fetcher: {
          func: '../lib/graphql-client#fetcher',
          isReactHook: false,
        },
        exposeQueryKeys: true,
        exposeFetcher: true,
        addInfiniteQuery: true,
        withHooks: true,
      },
    },
  },
};

export default config;
