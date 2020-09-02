/**
 *
 */

import React from "react";
import "antd/dist/antd.css";
import Routes from "../Routes";
import { Navbar } from "../components";
import { Layout } from "antd";

// const { Footer } = Layout;

/**
 * AppPresenter
 */
const AppPresenter = props => {
  return (
    <Layout>
      {/* ===== 네비바 ===== */}
      <Navbar />
      {/* ===== 컨텐츠 ===== */}
      <Layout>
        {/* {sidebar(props.location.pathname)} */}
        <Routes />
        {/* <Footer style={{ textAlign: "center", backgroundColor: "#00152" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default AppPresenter;
