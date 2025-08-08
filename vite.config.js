import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/design-web-react/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true, // ajuda debug
  },
});
