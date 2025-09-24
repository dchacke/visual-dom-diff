// bundle.js
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./lib/index.js"],  // 👈 or your actual entry point
  bundle: true,
  minify: true,
  outfile: "dist/visual-dom-diff.js",
  format: "esm", // 'iife' if you want a global variable
  target: ["es2020"], // or adjust as needed
}).catch(() => process.exit(1));
