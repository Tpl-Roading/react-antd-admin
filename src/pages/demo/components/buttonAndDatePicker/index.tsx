import { FC } from "react"
import { useState } from "react"
import { Button, Row, Col, DatePicker, Statistic } from "antd"
import dayjs from "dayjs"
import cls from "classnames"

import sty from "./index.module.less"

type IndexProps = {
  className?: string
}

const Index: FC<IndexProps> = ({ className }) => {
  const [count, setCount] = useState(0)

  return (
    <Row gutter={20} className={cls(sty.con, className)}>
      <Col offset={2} span={10}>
        <Statistic title="Latest count is " value={count} />
        <Button
          type="primary"
          onClick={() => setCount((count) => count + 1)}
          style={{ marginRight: "20px" }}
        >
          {" "}
          +1{" "}
        </Button>
        <Button type="primary" onClick={() => setCount((count) => count - 1)} danger>
          {" "}
          -1{" "}
        </Button>
      </Col>
      <Col span={10}>
        <DatePicker defaultValue={dayjs() as any} />
      </Col>
    </Row>
  )
}

export default Index
