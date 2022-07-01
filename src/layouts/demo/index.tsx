import { Outlet } from "react-router"
import { Layout } from "antd"

import "./index.less"

const { Content, Sider, Header, Footer } = Layout

export default function Index() {
  return (
    <Layout className="ly-demo">
      <Sider className="ly-demo-sider" width={210}>
        <span>Sider</span>
      </Sider>
      <Content className="ly-demo-con">
        <Header className="ly-demo-head">
          <span>Navbar</span>
        </Header>
        <Content className="ly-demo-body">
          <Outlet />
        </Content>
        <Footer className="ly-demo-footer"></Footer>
      </Content>
    </Layout>
  )
}
