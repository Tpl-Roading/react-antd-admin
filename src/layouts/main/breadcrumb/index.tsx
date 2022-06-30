import { FC, useEffect, useState } from "react"
import { Link, matchRoutes, RouteMatch, useLocation } from "react-router-dom"

import { Breadcrumb, Menu } from "antd"
import mainRoutes from "@/router/mainMenuRoutes"
import { RouteObjectExtend } from "@/router/routes"
import { filter } from "@/utils/tree"

type ExtendRouteMatch = Omit<RouteMatch, "route"> & {
  route: RouteObjectExtend
}

const Index: FC = () => {
  const { pathname } = useLocation()
  const [routes, setRoutes] = useState<RouteObjectExtend[]>([])
  const [latestRoute, setLatestRoute] = useState<ExtendRouteMatch>()

  useEffect(() => {
    const routes = (matchRoutes(mainRoutes, pathname) ?? []) as ExtendRouteMatch[]

    setLatestRoute(routes[routes.length - 1])
    setRoutes(
      filter(
        routes
          .slice(0, routes.length - 1)
          .map((item) => item.route)
          .filter(Boolean),
        (item) => !item.hideMenu && !!item.path,
      ),
    )
  }, [pathname])

  return (
    <Breadcrumb>
      {routes.map((item) => (
        <Breadcrumb.Item key={item.path} overlay={<OverlayMenu routes={item.children} />}>
          {item.title}
        </Breadcrumb.Item>
      ))}
      <Breadcrumb.Item>{latestRoute?.route?.title ?? "Null"}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Index

const OverlayMenu: FC<{ routes?: RouteObjectExtend[] }> = ({ routes = [] }) => {
  if (!routes.length) return null

  return (
    <Menu
      items={routes.map((item) => ({
        key: item.key,
        label: <Link to={item.key}>{item.title}</Link>,
      }))}
    />
  )
}
