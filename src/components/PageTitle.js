/**
 *
 */

import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const PageTitle = props => {
  return <Title level={props.size}>{props.children}</Title>;
};

PageTitle.defaultProps = {
  /*
   1, 2, 3, 4
   */
  size: 3
};

export default PageTitle;
