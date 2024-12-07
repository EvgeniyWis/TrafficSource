import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

const aliases = {
  "@": path.resolve(__dirname, "./src"),
};

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/TrafficSource/",
  resolve: {
    alias: aliases,
  },

  build: {
    emptyOutDir: false,
    outDir: "build",
  },
  server: {
    open: true,
  },
});
