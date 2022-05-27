import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"
import dayjs from "dayjs"
import "dayjs/locale/zh-cn"

import "modern-css-reset"
import App from "./pages/demo"

import "@/assets/less/index.less"

dayjs.locale("zh-cn")

const Index = () => (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)

export default Index
