import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-quilljs", "quill", "lodash.isequal"], // <-- bunu əlavə et
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // <-- bu CJS modulları üçün lazımdır
    },
  },
});
