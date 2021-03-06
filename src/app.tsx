import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"
import dayjs from "dayjs"
import "dayjs/locale/zh-cn"
import { BrowserRouter } from "react-router-dom"

import "modern-css-reset"

import Router from "./router"

import "@/assets/less/index.less"

dayjs.locale("zh-cn")

const Index = () => (
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ConfigProvider>
)

export default Index
