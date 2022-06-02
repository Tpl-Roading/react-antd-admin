import { Navigate } from "react-router-dom"

import { RouteObjectExtend } from "./routes"
import mainMenuRoutes from "./mainMenuRoutes"

import LoginGuard from "./guards/login"
import MainLayout from "@/layouts/main"

const lazyRoutes: RouteObjectExtend[] = [
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
