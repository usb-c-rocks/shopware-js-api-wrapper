const path = require('path');

module.exports = {
  entry: "./src/module.ts",
  output: {
    filename: "module.js",
    path: path.resolve(__dirname, 'lib'),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      // CUSTOM PACKAGES:
      '@shopware-api-client': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ }
    ]
  }
}
