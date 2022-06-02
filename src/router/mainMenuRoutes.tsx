import { lazy } from "react"
import { Navigate } from "react-router-dom"
import { DashboardOutlined, TableOutlined } from "@ant-design/icons"

import { RouteObjectExtend } from "./routes"

import LazyComponent from "@/components/lazyComponent"

const Dashboard = lazy(() => import("@/pages/dashboard"))
const Detail = lazy(() => import("@/pages/detail"))

const menuRoutes: RouteObjectExtend[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    key: "/dashboard",
    icon: <DashboardOutlined />,
    children: [
      {
        path: "",
        title: "仪表盘",
        key: "/dashboard",
        element: <Navigate to="/dashboard/analysis" />,
      },
      {
        path: "/dashboard/analysis",
        title: "仪表盘",
        key: "/dashboard/analysis",
        element: (
          <LazyComponent>
            <Dashboard />
          </LazyComponent>
        ),
      },
      {
        path: "/dashboard/workbench",
        title: "工作台",
        key: "/dashboard/workbench",
        element: (
          <LazyComponent>
            <Dashboard />
          </LazyComponent>
        ),
      },
    ],
  },
  {
    path: "/table",
    title: "表格页",
    key: "/table",
    icon: <TableOutlined />,
    children: [
      {
        path: "",
        title: "简单表格",
        key: "/table",
        element: <Navigate to="/table/simple" />,
      },
      {
        path: "simple",
        title: "简单表格",
        key: "/table/simple",
        element: (
          <LazyComponent>
            <Dashboard />
          </LazyComponent>
        ),
      },
      {
        path: ":id",
        title: "表格详情",
        key: "/table/:id",
        activeMenu: "/table/simple",
        hideMenu: true,
        element: (
          <LazyComponent>
            <Detail />
          </LazyComponent>
        ),
      },
    ],
  },
]

export default menuRoutes
