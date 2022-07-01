import { filter } from "@/utils/tree"

import MainMenuRoutes from "./mainRoutes"

export const MainMenus = filter(MainMenuRoutes, (item) => item.hideMenu !== true && !!item.path)

const MenuRoutes = [...MainMenus]

export default MenuRoutes
