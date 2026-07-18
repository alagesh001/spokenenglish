import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import obfuscator from "vite-plugin-javascript-obfuscator";

export default defineConfig(({ mode }) => ({
  base: "/spokenenglish/",
  plugins: [
    react(),

    mode === "production" &&
      obfuscator({
        include: ["src/**/*.{js,jsx}"],

        exclude: [
          "src/pages/lessons/**",
          "src/pages/lessons/**/*",
          "src/pages/lessons/registry.js",
          "src/pages/lessons/registry.jsx",
        ],

        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        stringArray: true,
        selfDefending: false,
      }),
  ].filter(Boolean),
}));