/**
 *
 */

import React from "react";
import { Layout, Breadcrumb } from "antd";
const { Sider, Content } = Layout;

const cardStyle = {
  background: "#fff",
  padding: 24,
  margin: 0,
  minHeight: 280
};

const defaultStyle = {
  background: "#fff"
};

const padding24 = {
  padding: 24
};

const Container = props => {
  // return <Layout>{props.children}</Layout>;
  return (
    <Layout>
      {props.sider && (
        <Sider style={{ backgroundColor: "#fff" }}>
          {/* <Sider style={{ backgroundColor: "#e6e8eb" }}> */}
          {props.siderRender}
        </Sider>
      )}
      <Layout
        style={{
          ...(props.defaultPadding || props.card
            ? {
                padding: "0 24px 24px"
              }
            : { ...defaultStyle }),

          ...(props.padding && { ...padding24 })
        }}
      >
        {props.pageHistory.length > 0 && (
          <Breadcrumb style={{ margin: "16px 0" }}>
            {props.pageHistory.map((item, itemIndex) => (
              <Breadcrumb.Item key={`breadcrumb_id_${itemIndex}`}>
                {item}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
        <Content style={{ ...(props.card && cardStyle) }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

Container.defaultProps = {
  sider: false,
  siderRender: <h3>Sider</h3>,
  card: false,
  defaultPadding: false,
  pageHistory: ["Home", "List", "App"],
  padding: false
};

export default Container;
