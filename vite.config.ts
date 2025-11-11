import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   optimizeDeps: {
    include: ["react-quilljs", "quill"], // <-- burada react-quilljs əlavə olunur
  },
})
