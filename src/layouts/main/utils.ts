import { matchPath } from "react-router"

import { RouteObjectExtend } from "@/router/routes"
import { findPath } from "@/utils/tree"

export function findActiveMenu(menus: RouteObjectExtend[], pathname = location.pathname) {
  return findPath(
    menus,
    (item: any) => !item?.children?.length && matchPath(pathname, item.key),
  ) as RouteObjectExtend[] | null
}
