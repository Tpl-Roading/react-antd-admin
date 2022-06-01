import { lazy } from "react"
import { Navigate } from "react-router-dom"

import { RouteObjectExtend } from "./routes"

import LoginGuard from "./guards/login"
import MainLayout from "@/layouts/main"
import LazyComponent from "@/components/lazyComponent"

const Dashboard = lazy(() => import("@/pages/dashboard"))
const Detail = lazy(() => import("@/pages/detail"))

const lazyRoutes: RouteObjectExtend[] = [
  {
    path: "/",
    title: "首页",
    element: (
      <LoginGuard>
        <MainLayout />
      </LoginGuard>
    ),
    children: [
      {
        path: "",
        title: "首页",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "dashboard",
        title: "仪表盘",
        element: (
          <LazyComponent>
            <Dashboard />
          </LazyComponent>
        ),
      },
      {
        path: "detail/:id",
        title: "详情",
        element: (
          <LazyComponent>
            <Detail />
          </LazyComponent>
        ),
      },
    ],
  },
]

export default lazyRoutes
