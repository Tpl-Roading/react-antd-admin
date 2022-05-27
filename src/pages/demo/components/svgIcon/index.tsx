import { Card, Row, Col, Statistic } from "antd"
import Icon, { EditFilled } from "@ant-design/icons"

import LockIcon from "@/assets/icons/lock.svg?component"
import ClockIcon from "@/assets/icons/clock.svg?component"
import "./index.less"

const Index = () => (
  <Card title="Antd svg icons">
    <Row gutter={30} className="svg-icon-con">
      <Col span={8}>
        <Statistic title="@ant-design/icons" valueRender={() => null} />
        <EditFilled className="svg1" />
      </Col>
      <Col span={8}>
        <Statistic title="@ant-design/icons for custom svg" valueRender={() => null} />
        <Icon component={LockIcon} className="svg2" />
      </Col>
      <Col span={8}>
        <Statistic title="custom svg component" valueRender={() => null} />
        {/* can't change the svg style */}
        <ClockIcon className="svg3" />
      </Col>
    </Row>
  </Card>
)

export default Index
