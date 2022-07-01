import { lazy } from "react"

import LazyComponent from "@/components/lazyComponent"
import DemoLayout from "@/layouts/demo"
import { RouteObjectExtend } from "./routes"

const Demo = lazy(() => import("@/pages/demo"))

const menuRoutes: RouteObjectExtend[] = [
  {
    path: "/demo",
    title: "Demo",
    key: "/demo",
    element: <DemoLayout />,
    children: [
      {
        path: "",
        title: "Demo",
        key: "/demo",
        element: (
          <LazyComponent>
            <Demo />
          </LazyComponent>
        ),
      },
    ],
  },
]

export default menuRoutes
