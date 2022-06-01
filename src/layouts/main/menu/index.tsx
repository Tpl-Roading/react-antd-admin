import { FC } from "react"
import { Menu } from "antd"
import { ItemType } from "antd/lib/menu/hooks/useItems"

import mainMenus from "@/router/mainMenuRoutes"

import { filter, treeMap } from "@/utils/tree"

const menuRoutes = filter(mainMenus, (item) => item.hideMenu !== true && !!item.path)
const menus = treeMap(menuRoutes, {
  conversion: (item: any) => ({ label: item.title, key: item.key, icon: item.icon }),
}) as ItemType[]

import "./index.less"

const Index: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <Menu
      className="ly-main-menu"
      mode={collapsed ? "vertical" : "inline"}
      theme="dark"
      items={menus}
    />
  )
}

export default Index
