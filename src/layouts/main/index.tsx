import { Outlet } from "react-router"
import { Layout } from "antd"

import useStore from "@/stores/layouts/main"

import Navbar from "./navbar"
import Sidebar from "./sidebar"

import "./index.less"

const { Content, Sider, Header, Footer } = Layout

export default function Index() {
  const { collapsed } = useStore()

  return (
    <Layout className="ly-main">
      <Sider className="ly-main-sider" width={collapsed ? 48 : 210}>
        <Sidebar />
      </Sider>
      <Content className="ly-main-con">
        <Header className="ly-main-head">
          <Navbar />
        </Header>
        <Content className="ly-main-body">
          <Outlet />
        </Content>
        <Footer className="ly-main-footer"></Footer>
      </Content>
    </Layout>
  )
}
