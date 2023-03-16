module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  // collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/stories.tsx"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "@/src": ["<rootDir>/src/$1"],
    "@/components(.*)$": ["<rootDir>/src/components/$1"],
    "@/styles(.*)$": ["<rootDir>/src/styles/$1"],
    "@/services(.*)$": ["<rootDir>/src/services/$1"],
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
