import { ReactNode } from "react"
import { RouteObject } from "react-router-dom"

import Login from "@/pages/login"
import NotFound from "@/pages/404"

import lazyRoutes from "./lazyRoutes"

export type RouteObjectExtend = Omit<RouteObject, "children" | "path"> & {
  key: string // 唯一字段，使用页面对应的完整路径
  title: string
  path: string

  activeMenu?: string // 当前页面对应的激活菜单项，主要针对不属于菜单列表中的页面，需要激活菜单
  hideMenu?: boolean // 是否隐藏菜单
  icon?: ReactNode

  children?: RouteObjectExtend[]
}

const routes: RouteObjectExtend[] = [
  {
    path: "/login",
    title: "登录",
    key: "/login",
    element: <Login />,
  },
  ...lazyRoutes,
  {
    path: "*",
    title: "404",
    key: "/404",
    element: <NotFound />,
  },
]

export default routes
