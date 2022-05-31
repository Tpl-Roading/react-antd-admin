import { Outlet } from "react-router"
import { Link } from "react-router-dom"

import "./index.less"

export default function Index() {
  return (
    <div className="ly-detail">
      <ul className="ly-detail-head">
        <li>
          <Link to="/detail/1">Detail 1</Link>
        </li>
        <li>
          <Link to="/detail/2">Detail 2</Link>
        </li>
      </ul>
      <div className="ly-detail-body">
        <Outlet />
      </div>
    </div>
  )
}
