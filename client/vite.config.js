import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server:  {
      host: '0.0.0.0', // or true
    },
    define: {
        HOST_URI: JSON.stringify(env.HOST_URI),
    },
  }
})
