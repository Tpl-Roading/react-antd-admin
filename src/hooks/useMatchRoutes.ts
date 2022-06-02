import { matchRoutes } from "react-router-dom"
import allRoutes, { RouteObjectExtend } from "@/router/routes"

export default function useMatchRoutes({
  routes = allRoutes,
  path = window.location.pathname,
}: {
  routes?: RouteObjectExtend[]
  path?: string
}) {
  return matchRoutes(routes, path)
}
