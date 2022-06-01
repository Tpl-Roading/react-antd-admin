import { matchRoutes } from "react-router-dom"
import routes from "@/router/routes"

export default function useMatchRoutes(path = window.location.pathname) {
  return matchRoutes(routes, path)
}
