import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    server:  {
      host: '0.0.0.0', // or true
    },
    define: {
        HOST_URI: "http://comp680fsweb.duckdns.org:5555",
    },
  })
}
