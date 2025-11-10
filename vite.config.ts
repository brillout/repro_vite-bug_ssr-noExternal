import { telefunc } from "telefunc/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vike(), react(), telefunc()],
  ssr: {
    noExternal: ['@brillout/picocolors'],
    optimizeDeps: {
      // include: ['@brillout/picocolors']
    }
  }
});
