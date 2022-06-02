import { FC, useEffect } from "react"
import { matchRoutes, useLocation } from "react-router-dom"

// import { Breadcrumb } from "antd"
import mainRoutes from "@/router/mainMenuRoutes"

const Index: FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const routes = matchRoutes(mainRoutes, pathname)
    console.log("🚀 ~ file: index.tsx ~ line 9 ~ routes", routes)
  }, [pathname])

  return <div>breadcrumb Index</div>
}

export default Index
