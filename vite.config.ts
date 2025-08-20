import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic", // modern JSX transform
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: "localhost",
    port: 5173, // default Vite dev server port
    open: true, // auto-open browser
    strictPort: false, // if 5173 busy, use next free port
    watch: {
      usePolling: true, // fixes hot reload issues on Windows
    },
    fs: {
      strict: true,
      deny: ["**/.*"], // block hidden file access
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // speeds up dev server
  },
  esbuild: {
    loader: "tsx",
    target: "esnext",
  },
});
