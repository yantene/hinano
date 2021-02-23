module.exports = {
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {
    // "#/path/to/file" を "${projectRoot}/path/to/file" に mapping
    "^#/(.+)": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      "tsconfig": "tsconfig.json",
    },
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
};
