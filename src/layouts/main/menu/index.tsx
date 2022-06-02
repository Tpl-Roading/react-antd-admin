import { FC, useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Menu } from "antd"

import { ItemType } from "antd/lib/menu/hooks/useItems"
import mainMenus from "@/router/mainMenuRoutes"
import { RouteObjectExtend } from "@/router/routes"

import { filter, treeMap, findNode } from "@/utils/tree"

const menuRoutes = filter(mainMenus, (item) => item.hideMenu !== true && !!item.path)
const menus = treeMap(menuRoutes, {
  conversion: (item: any) => ({ label: item.title, key: item.key, icon: item.icon }),
}) as ItemType[]

import "./index.less"
import { findActiveMenu } from "../utils"

function findActiveMainMenu() {
  return findActiveMenu(menuRoutes)
}

const Index: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[] | undefined>([])
  const navigator = useNavigate()

  const onOpenChange = useCallback(
    (openKeys: string[]) => {
      if (!collapsed) {
        setOpenKeys(openKeys)
      }
    },
    [collapsed],
  )

  const onSelect = useCallback(
    ({ selectedKeys, item }: { selectedKeys: string[]; item?: any }) => {
      const latestMenuKey = selectedKeys[selectedKeys.length - 1]
      const activeMenu = findNode(menuRoutes, (item: any) => item.key === latestMenuKey)

      // 如果是选择的菜单项时，antd会传入item选项
      if (item) {
        navigator(latestMenuKey)
      }

      console.log("🚀 ~ file: index.tsx ~ line 40 ~ onSelect ~ activeMenu", activeMenu)
      setSelectedKeys(selectedKeys)
    },
    [navigator],
  )

  const onMenuInit = useCallback((activeMenus: RouteObjectExtend[]) => {
    if (activeMenus.length) {
      const activeMenu = activeMenus[activeMenus.length - 1]
      onSelect({ selectedKeys: [activeMenu?.activeMenu || activeMenu?.key] })
      setOpenKeys(activeMenus.slice(0, activeMenus.length - 1).map((item) => item.key))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const activeMenus = findActiveMainMenu()
    let timer

    // 未直接找到对应的激活菜单项，说明该路由为重定向路由
    if (!activeMenus?.length) {
      timer = setTimeout(() => {
        const activeMenus = findActiveMainMenu()
        if (activeMenus && activeMenus.length) {
          onMenuInit(activeMenus)
        }
      }, 0)
    } else {
      onMenuInit(activeMenus)
    }

    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (collapsed) {
      setOpenKeys(undefined)
    }
  }, [collapsed])

  return (
    <Menu
      className="ly-main-menu"
      mode={collapsed ? "vertical" : "inline"}
      theme="dark"
      items={menus}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
      onSelect={onSelect}
    />
  )
}

export default Index
