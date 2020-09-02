/**
 *
 */

import React from "react";
import { Breadcrumb } from "antd";

const PageHistory = props => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {props.items.map(item => (
        <Breadcrumb.Item>{item}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

PageHistory.defaultProps = {
  items: ["Home"]
};

export default PageHistory;
