import { Navigate } from "react-router-dom"

import { RouteObjectExtend } from "./routes"
import mainMenuRoutes from "./mainRoutes"
import demoRoutes from "./demoRoutes"

import LoginGuard from "./guards/login"
import MainLayout from "@/layouts/main"

const lazyRoutes: RouteObjectExtend[] = [
  ...demoRoutes,
  {
    path: "/",
    title: "首页",
    key: "/",
    element: (
      <LoginGuard>
        <MainLayout />
      </LoginGuard>
    ),
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
]

export default lazyRoutes
