import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components:`${path.resolve(__dirname, "src/components")}`,
      pages:`${path.resolve(__dirname, "src/pages")}`,
      services:`${path.resolve(__dirname, "src/services")}`,
      constant:`${path.resolve(__dirname, "src/constant")}`,
      type:`${path.resolve(__dirname, "src/interface")}`
    }
  }
})
