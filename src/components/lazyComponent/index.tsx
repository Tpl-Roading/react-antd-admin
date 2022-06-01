import { FC, Suspense } from "react"

import CenterLoading from "../centerLoading"

const Index: FC = ({ children }) => (
  <Suspense fallback={<CenterLoading tip="正在加载，请稍后" spinning={true} />}>
    {children}
  </Suspense>
)

export default Index
