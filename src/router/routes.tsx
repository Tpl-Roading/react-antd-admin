import { RouteObject } from "react-router-dom"

import Login from "@/pages/login"
import Demo from "@/pages/demo"
import NotFound from "@/pages/404"

import lazyRoutes from "./lazyRoutes"

export type RouteObjectExtend = Omit<RouteObject, "children"> & {
  title?: string
  children?: RouteObjectExtend[]
}

const routes: RouteObjectExtend[] = [
  {
    path: "/login",
    title: "登录",
    element: <Login />,
  },
  {
    path: "/demo",
    title: "Demo",
    element: <Demo />,
  },
  ...lazyRoutes,
  {
    path: "*",
    title: "404",
    element: <NotFound />,
  },
]

export default routes
