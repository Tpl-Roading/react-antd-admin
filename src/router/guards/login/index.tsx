import { FC } from "react"
import { Navigate } from "react-router-dom"

import { useAuth } from "@/hooks/useAuth"

const LoginLayout: FC = ({ children }) => {
  const [user] = useAuth()

  return user ? <>{children}</> : <Navigate to="/login" state={{ from: location }} />
}

export default LoginLayout
