import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    react(),
    laravel({
      input: ["resources/css/app.css", "resources/js/app.tsx"],
      refresh: true,
      publicDirectory: "public_html",
    }),
  ],
  resolve: {
    alias: {
      "@": "/resources/js",
    },
  },
  build: {
    outDir: "public_html/build",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          inertia: ["@inertiajs/react"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
