/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // arquivos que vão entrar no coverage
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  // pasta onde vai ser gerado os arquivos do coverage
  coverageDirectory: "coverage",
  // pastas que vão ser ignoradas pelo coverage
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  // define a pasta principal dos testes
  roots: ["<rootDir>/tests"],
  // o ambiente onde será executado os testes, como estamos no backend é o node
  testEnvironment: "node",
  // usa o transform para o jest transpilar arquivos typescript
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
