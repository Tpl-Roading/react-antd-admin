declare type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}

declare type Nullable<T> = T | null
declare type NonNullable<T> = T extends null | undefined ? never : T
declare type Recordable<T = any> = Record<string, T>
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}
declare type Indexable<T = any> = {
  [key: string]: T
}
declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
declare type TimeoutHandle = ReturnType<typeof setTimeout>
declare type IntervalHandle = ReturnType<typeof setInterval>

declare interface ChangeEvent extends Event {
  target: HTMLInputElement
}

declare interface WheelEvent {
  path?: EventTarget[]
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

declare interface ViteEnv {
  VITE_PORT: number
  VITE_USE_MOCK: boolean
  VITE_PUBLIC_PATH: string
  VITE_GLOB_APP_TITLE: string
  VITE_GLOB_APP_SHORT_NAME: string
  VITE_DROP_CONSOLE: boolean
  VITE_GLOB_PROD_MOCK: boolean
  VITE_GLOB_IMG_URL: string
  VITE_PROXY: [string, string][]
  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none"
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
}

declare function parseInt(s: string | number, radix?: number): number

declare function parseFloat(string: string | number): number

type APP_INFO = {
  pkg: {
    name: string
    version: string
  }
  lastBuildTime: string
}

declare const __APP_INFO__: APP_INFO
declare interface Window {
  __APP_INFO__: APP_INFO
}
