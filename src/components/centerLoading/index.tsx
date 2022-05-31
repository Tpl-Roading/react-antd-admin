import { FC } from "react"
import { Spin, SpinProps } from "antd"
import cls from "classnames"

import "./index.less"

type IndexProps = SpinProps & {
  conClassName?: string
}

const Index: FC<IndexProps> = ({ conClassName, ...spinProps }) => {
  return (
    <div className={cls(conClassName, "com-fallback-loading")}>
      <Spin {...spinProps} />
    </div>
  )
}

export default Index
