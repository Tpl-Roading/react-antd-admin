import cls from "classnames"
import { Space } from "antd"
import { MenuFoldOutlined } from "@ant-design/icons"

import useStore from "@/stores/layouts/main"

import "./index.less"

const Index = () => {
  const { collapsed, toggleCollapse } = useStore()

  return (
    <div className="ly-main-navbar">
      <Space className="ly-main-navbar-left">
        <MenuFoldOutlined
          className={cls("ly-main-navbar-collapse", { "ly-main-navbar-collapsed": collapsed })}
          onClick={toggleCollapse}
        />
      </Space>
      <Space className="ly-main-navbar-right">right</Space>
    </div>
  )
}

export default Index
