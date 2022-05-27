import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { createStyleImportPlugin, AntdResolve } from "vite-plugin-style-import"

import lessToJS from "less-vars-to-js"
import dayjs from "dayjs"
import antdDayjs from "antd-dayjs-vite-plugin"

import { resolve } from "path"
import fs from "fs"

import { getDayTimeFormat } from "./src/utils/dayjs"
import pkg from "./package.json"

const __APP_INFO__ = {
  pkg: {
    name: pkg.name,
    version: pkg.version,
  },
  lastBuildTime: dayjs().format(getDayTimeFormat()),
}

const customTheme = lessToJS(
  fs.readFileSync(resolve(__dirname, "./src/assets/less/theme.less"), "utf8"),
)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),

      // antd 按需引入
      createStyleImportPlugin({
        resolves: [AntdResolve()],
      }),

      // 替换antd中的dayjs
      antdDayjs(),
    ],
    // 引入antd自定义主题配置
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: customTheme,
        },
      },
    },
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
        "@": resolve(__dirname, "./src"),
        "#": resolve(__dirname, "./types"),
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
