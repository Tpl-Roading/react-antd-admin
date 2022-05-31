import { Routes, Route, Link } from "react-router-dom"

import Login from "@/pages/login"
import Demo from "@/pages/demo"
import NotFound from "./components/notFound"
import genAsyncRoutes from "./asyncRoutes"

import "./index.less"

export default function StaticRoutes() {
  return (
    <div className="ly-main">
      <h1>React Router Demo</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/demo">demo</Link>
        </li>
        <li>
          <Link to="/main/dashboard">dashboard</Link>
        </li>
        <li>
          <Link to="/main/demo">Main Demo</Link>
        </li>
        <li>
          <Link to="/detail/11">Detail</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<Demo />} />
        {genAsyncRoutes()}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
