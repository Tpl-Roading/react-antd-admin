import { FC, useState, useCallback, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Menu } from "antd"

import { ItemType } from "antd/lib/menu/hooks/useItems"
import { MainMenus } from "@/router/menuRoutes"
import { RouteObjectExtend } from "@/router/routes"

import { treeMap } from "@/utils/tree"

const menus = treeMap(MainMenus, {
  conversion: (item: any) => ({ label: item.title, key: item.key, icon: item.icon }),
}) as ItemType[]

import "./index.less"
import { findActiveMenu } from "../utils"

function findActiveMainMenu() {
  return findActiveMenu(MainMenus)
}

const Index: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[] | undefined>([])
  const navigator = useNavigate()
  const { pathname } = useLocation()

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

      // 如果是选择的菜单项时，antd会传入item选项
      if (item) {
        navigator(latestMenuKey)
      }

      setSelectedKeys(selectedKeys)
    },
    [navigator],
  )

  const onMenuInit = useCallback(
    (activeMenus: RouteObjectExtend[]) => {
      if (activeMenus.length) {
        const activeMenu = activeMenus[activeMenus.length - 1]
        onSelect({ selectedKeys: [activeMenu?.activeMenu || activeMenu?.key] })
        if (!collapsed)
          setOpenKeys(activeMenus.slice(0, activeMenus.length - 1).map((item) => item.key))
      }
    },
    [collapsed, onSelect],
  )

  useEffect(() => {
    // 如果是直接通过点击菜单切换，则不进行后续操作
    if (selectedKeys.includes(pathname)) return

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
  }, [pathname])

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
