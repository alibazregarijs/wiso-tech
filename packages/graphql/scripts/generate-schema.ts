import { writeFileSync, existsSync, statSync } from 'node:fs';

import { fileURLToPath } from 'node:url';

import { printSchema, lexicographicSortSchema } from 'graphql';

import { join, resolve, dirname } from 'path';

// 👇 Fix: Reconstruct __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import your schema
import { schema } from '../back-graphql/graphql/schema';

// 1. Define absolute path to package root (parent of 'scripts' folder)
const packageRoot = resolve(__dirname, '..');
const targetPath = join(packageRoot, 'schema.graphql');

console.log('-------------------------------------------');
console.log('🔄 START: Generating GraphQL Schema');
console.log(`📂 Package Root: ${packageRoot}`);
console.log(`🎯 Target File:  ${targetPath}`);

try {
  // 2. Check if schema object is valid
  if (!schema) {
    throw new Error('❌ Imported schema is undefined! Check back-graphql/graphql/schema.ts');
  }

  // 3. Convert to string
  const schemaAsString = printSchema(lexicographicSortSchema(schema));

  if (schemaAsString.trim().length === 0) {
    throw new Error('❌ Generated schema string is EMPTY.');
  }

  // 4. Write file
  writeFileSync(targetPath, schemaAsString);

  // 5. Verify file exists
  if (existsSync(targetPath)) {
    const stats = statSync(targetPath);
    console.log(`✅ SUCCESS: Schema written to disk (${stats.size} bytes)`);
    console.log('-------------------------------------------');
  } else {
    throw new Error('❌ File was written but cannot be found on disk!');
  }
} catch (error) {
  console.error('❌ FATAL ERROR in generate-schema.ts:');
  console.error(error);
  process.exit(1);
}
