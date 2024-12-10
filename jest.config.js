const nextJest = require("next/jest");

require("dotenv").config({
  path: ".env.development",
});

const createJestConfig = nextJest();
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 1000 * 60, // 60 segundos
});

module.exports = jestConfig;
