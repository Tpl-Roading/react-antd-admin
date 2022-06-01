import { useRoutes } from "react-router"

import routes from "./routes"

const Index = () => {
  const element = useRoutes(routes)

  return element
}

export default Index
