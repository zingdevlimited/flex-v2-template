module.exports = (config, { isProd, isDev, isTest }) => {
  /**
   * Customize the Jest by modifying the config object.
   * Consult https://jestjs.io/docs/en/configuration for more information.
   */

  config.collectCoverage = true;
  config.coverageReporters = ["lcov", "text"];
  config.collectCoverageFrom = ["src/**/*.{ts,tsx}"];

  config.setupFilesAfterEnv = ["./jest.setup.js"]

  return config;
};
