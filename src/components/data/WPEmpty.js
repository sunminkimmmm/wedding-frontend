import React from "react";
import { Empty } from "antd";

const WPEmpty = props => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: 285,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Empty description={props.description}>
        {props.children && props.children}
      </Empty>
    </div>
  );
};

WPEmpty.defaultProps = {
  description: "No Data"
};

export default WPEmpty;
