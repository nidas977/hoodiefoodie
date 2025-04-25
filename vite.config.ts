import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: './', // ✅ Use './' for correct relative paths on Cloudflare Pages

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          routing: ['react-router-dom'],
        },
      },
    },
  },

  server: {
    host: "localhost", // or '0.0.0.0' for network access
    port: 8080,
    strictPort: true,
  },
}));
