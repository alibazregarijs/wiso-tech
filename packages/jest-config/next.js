// packages/jest-config/next.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');

// We export a FUNCTION that takes the app's root directory
// This ensures next/jest looks for .env and next.config.js in the specific app folder, not the shared folder
module.exports = (appDir) => {
  const createJestConfig = nextJest({
    dir: appDir,
  });

  const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
  };

  return createJestConfig(customJestConfig);
};
