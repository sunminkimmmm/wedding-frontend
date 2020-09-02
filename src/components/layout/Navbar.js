/**
 *
 */

import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const menus = [
  {
    id: 1,
    name: "고객관리",
    path: "/customers"
  },
  {
    id: 2,
    name: "행사일정",
    path: "/eventCalendar"
  },
  {
    id: 3,
    name: "방문일정",
    path: "/visitSchedule"
  },
  {
    id: 4,
    name: "정산관리",
    path: "/settlementManagement"
  },
  {
    id: 5,
    name: "거래처관리",
    path: "/accountManagement"
  },
  {
    id: 6,
    name: "사용자관리",
    path: "/userManagement"
  }
];

const Navbar = props => {
  // const pathName = window.location.pathname;
  // console.log("pathName : ", pathName);

  return (
    <Header className="header">
      <div
        className="logo"
        style={{
          width: "120px",
          height: "31px",
          float: "left",
          textAlign: "left"
        }}
      >
        <Link to="/">
          <h1 style={{ color: "#fff" }}>WeddPlaner</h1>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px", float: "right" }}
      >
        {menus.map(menu => (
          <Menu.Item key={`menu_item_id_${menu.id}`}>
            <Link to={menu.path}>{menu.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default Navbar;
