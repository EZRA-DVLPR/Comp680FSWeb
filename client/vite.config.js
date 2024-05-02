import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv(mode, process.cwd(), '');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:  {
    host: '0.0.0.0', // or true
  }
  define: {
      'process.env.HOST_URI': JSON.stringify(env.HOST_URI),
  },
})
