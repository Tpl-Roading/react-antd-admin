import cls from "classnames"

import useStore from "@/stores/layouts/main"
import MainMenu from "../menu"

import logo from "@/assets/icons/logo.svg"
import "./index.less"

const Index = () => {
  const { collapsed } = useStore()

  return (
    <div className="ly-main-sidebar">
      <div className="ly-main-sidebar-logo">
        <img src={logo} className="ly-main-sidebar-logo-img" alt="logo" />
        <span
          className={cls("ly-main-sidebar-logo-title", {
            "ly-main-sidebar-logo-title--collapsed": collapsed,
          })}
        >
          Antd Admin
        </span>
      </div>
      <div className="ly-main-sidebar-body">
        <MainMenu collapsed={collapsed} />
      </div>
    </div>
  )
}

export default Index
