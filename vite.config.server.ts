import { defineConfig } from "vite";
import path from "path";

// Server build configuration
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
