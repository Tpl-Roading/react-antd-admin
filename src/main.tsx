import ReactDOM from "react-dom"

import App from "./app"

ReactDOM.render(<App />, document.getElementById("root"))

// 添加全局发布信息字段：vite define字段默认只在dev模式有效
window.__APP_INFO__ = __APP_INFO__
