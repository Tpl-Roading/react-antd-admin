import { lazy } from "react"
import { Route } from "react-router-dom"

import LazyComponent from "@/components/lazyComponent"
import MainLayout from "./layouts/main"
import DetailLayout from "./layouts/detail"
import LoginGuard from "./guards/login"

const Dashboard = lazy(() => import("@/pages/dashboard"))
const Demo = lazy(() => import("@/pages/demo"))
const Detail = lazy(() => import("@/pages/detail"))

const Index = () => {
  return (
    <>
      <Route
        path="/main"
        element={
          <LoginGuard>
            <MainLayout />
          </LoginGuard>
        }
      >
        <Route
          path="dashboard"
          element={
            <LazyComponent>
              <Dashboard />
            </LazyComponent>
          }
        />
        <Route
          path="demo"
          element={
            <LazyComponent>
              <Demo />
            </LazyComponent>
          }
        />
      </Route>
      <Route
        path="/detail"
        element={
          <LoginGuard>
            <DetailLayout />
          </LoginGuard>
        }
      >
        <Route
          path=":id"
          element={
            <LazyComponent>
              <Detail />
            </LazyComponent>
          }
        />
      </Route>
    </>
  )
}
export default Index
