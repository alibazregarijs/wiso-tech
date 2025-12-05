//front-end/jest.config.js
const nextJestConfig = require('@repo/jest-config');

// Provide the path to your Next.js app to load next.config.js and .env files
module.exports = nextJestConfig(__dirname);