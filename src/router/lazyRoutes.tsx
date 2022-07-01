import { Navigate, Outlet } from "react-router-dom"

import { RouteObjectExtend } from "./routes"
import mainMenuRoutes from "./mainRoutes"
import demoRoutes from "./demoRoutes"

import LoginGuard from "./guards/login"
import MainLayout from "@/layouts/main"

const lazyRoutes: RouteObjectExtend[] = [
  {
    path: "/",
    title: "首页",
    key: "/",
    element: (
      <LoginGuard>
        <Outlet />
      </LoginGuard>
    ),
    children: [
      ...demoRoutes,
      {
        path: "/",
        title: "首页",
        key: "/",
        element: <MainLayout />,
        children: [
          {
            path: "",
            title: "首页",
            key: "/",
            element: <Navigate to="/dashboard" />,
          },
          ...mainMenuRoutes,
        ],
      },
    ],
  },
]

export default lazyRoutes
