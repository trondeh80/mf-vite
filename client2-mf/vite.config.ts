import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
    react(),
    federation({
      name: "client2",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Client2": "./src/Client2.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  build: {
    manifest: "asset-manifest.json",
  },
});
