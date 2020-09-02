/**
 *
 */

import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;


const Sidebar2 = props => {
    return (
        <Sider width={200} style={{ background: "#fff" }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
            >
                {props.menu &&
                    props.menu.map((mainItem, mainId) => (
                        <SubMenu
                            key={`main_id_${mainId}`}
                            title={
                                <span>
                                    <Icon type="user" />
                                    <Link to={mainItem[props.linkKey]}> {mainItem[props.mainItemKey]}</Link>
                                    {/* {mainItem[props.mainItemKey]} */}
                                </span>
                            }
                        >
                            {(mainItem[props.subItemsKey] ||
                                mainItem[props.subItemsKey].length > 0) &&
                                mainItem[props.subItemsKey].map((subItem, subId) => (
                                    <Menu.Item key={`sub_id_${subId}`}>
                                        <Link to={subItem[props.linkKey]}> {subItem[props.subItemKey]}</Link>
                                        {/* {menus.map(menu => (
                      <Menu.Item key={`menu_item_id_${menu.id}`}>
                        <Link to={menu.path}> {subItem[props.subItemKey]}</Link>
                      </Menu.Item>
                    ))} */}


                                        {/* <Link to={menu.path}>{menu.name}</Link> */}
                                    </Menu.Item>
                                ))}
                        </SubMenu>
                    ))}
                {/* <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              설문관리
            </span>
          }
        >
          <Menu.Item key="1">설문지목록</Menu.Item>
          <Menu.Item key="2">통계</Menu.Item>
          <Menu.Item key="3">임시저장</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="laptop" />
              참여자관리
            </span>
          }
        >
          <Menu.Item key="5">참여자목록</Menu.Item>
          <Menu.Item key="6">통계</Menu.Item>
          <Menu.Item key="7">클러스터링</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="notification" />
              이용현황
            </span>
          }
        >
          <Menu.Item key="9">사용량</Menu.Item>
          <Menu.Item key="10">가입플랜</Menu.Item>
          <Menu.Item key="11">계정설정</Menu.Item>
        </SubMenu> */}
            </Menu>
        </Sider>
    );
};

Sidebar2.defaultProps = {
    mainItemKey: "name",
    subItemKey: "name",
    linkKey: "path",
    subItemsKey: "submenus",
    menu: [
        {
            id: 1,
            name: "고객 정산내역",
            submenus: [
                {
                    submenuId: 1,
                    name: "예식고객정산",
                    path: "/settlementManagement/weddingSettlement"
                },
                {
                    submenuId: 2,
                    name: "행사고객정산",
                    path: "/settlementManagement/eventSettlement"
                },
            ]
        },
        {
            id: 2,
            name: "리베르트 정산",
            submenus: [
                {
                    submenuId: 1,
                    name: "업체정산(행사일기준)",
                    path: "/settlementManagement/libert"
                }
            ]
        },
        {
            id: 3,
            name: "거래처발주정산",
            submenus: [
                {
                    submenuId: 1,
                    name: "거래처발주내역",
                    path: "/settlementManagement/orderDetails"
                },
                {
                    submenuId: 2,
                    name: "거래처발주정산",
                    path: "/settlementManagement/orderSettlement"
                }
            ]
        }
    ]
};

export default Sidebar2;
