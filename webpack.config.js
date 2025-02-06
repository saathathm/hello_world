const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for your worker code
  output: {
    path: path.resolve(__dirname, "build"), // Output directory
    filename: "worker.js", // Output file name
  },
  target: "webworker", // Cloudflare Workers are essentially web workers
  mode: "production", // Use production mode for optimized builds
};
