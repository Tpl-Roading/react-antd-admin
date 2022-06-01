import { Outlet } from "react-router"

import "./index.less"

export default function Index() {
  return (
    <div className="ly-main">
      <div className="ly-main-body">
        <Outlet />
      </div>
    </div>
  )
}
