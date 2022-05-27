// import React from 'react'
import { useState } from "react"
import { Button, Row, Col, DatePicker, Statistic } from "antd"
import dayjs from "dayjs"

import "./index.css"
import logo from "@/assets/icons/logo.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Row gutter={20} className="app-row">
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
            <DatePicker defaultValue={dayjs()} />
          </Col>
        </Row>
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="app-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
