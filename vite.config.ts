import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import dayjs from "dayjs"

import { getDayTimeFormat } from "./src/utils/dayjs"
import pkg from "./package.json"

const __APP_INFO__ = {
  pkg: {
    name: pkg.name,
    version: pkg.version,
  },
  lastBuildTime: dayjs().format(getDayTimeFormat()),
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      __APP_INFO__,
    },
    build: {
      minify: "terser",
      cssCodeSplit: true,
      target: "es2015",
      sourcemap: mode === "dev" || mode === "development",
    },
    resolve: {
      alias: {
        "@/": resolve(__dirname, "./src"),
        "#/": resolve(__dirname, "./types"),
      },
    },
    server: {
      port: 6523,
      // proxy: {
      // 	'/api': {
      // 		target: 'http://192.168.3.xx:xxxx',
      // 		changeOrigin: true,
      // 		rewrite: (path: string) => path.replace(/^\/api/, '')
      // 	}
      // },
    },
  }
})
