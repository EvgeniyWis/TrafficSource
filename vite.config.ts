import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const aliases = {
  "@": path.resolve(__dirname, "./src"),
};

export default defineConfig({
  plugins: [react()],
  base: "/TrafficSource/",
  resolve: {
    alias: aliases,
  },

  build: {
    emptyOutDir: false,
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
