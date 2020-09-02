/**
 *
 */

import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;


const Sidebar3 = props => {
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

Sidebar3.defaultProps = {
    mainItemKey: "name",
    subItemKey: "name",
    linkKey: "path",
    subItemsKey: "submenus",
    menu: [
        {
            id: 1,
            name: "기본설정",
            submenus: [
                {
                    submenuId: 1,
                    name: "직원관리",
                    path: "/userManagement/staffManagement"
                },
                {
                    submenuId: 2,
                    name: "접속로고",
                    path: "/userManagement/connectedLogo"
                },
            ]
        },
        {
            id: 2,
            name: "설정관리",
            submenus: [
                {
                    submenuId: 1,
                    name: "메뉴관리",
                    path: "/userManagement/menuManagement"
                },
                {
                    submenuId: 2,
                    name: "부대품목관리",
                    path: "/userManagement/itemManagement"
                },
                {
                    submenuId: 3,
                    name: "식음료관리",
                    path: "/userManagement/foodManagement"
                },
                {
                    submenuId: 4,
                    name: "예식/행사홀관리",
                    path: "/userManagement/hallManagement"
                },

            ]
        },
        {
            id: 3,
            name: "스케줄타임관리",
            submenus: [
                {
                    submenuId: 1,
                    name: "트리니치 타임관리",
                    path: "/userManagement/tree"
                },
                {
                    submenuId: 2,
                    name: "다빈치 타임관리",
                    path: "/userManagement/davinch"
                },
                {
                    submenuId: 3,
                    name: "루브르 타임관리",
                    path: "/userManagement/louvre"
                },
                {
                    submenuId: 4,
                    name: "비발디 타임관리",
                    path: "/userManagement/vivaldi"
                },
                {
                    submenuId: 5,
                    name: "가든+트리니티 타임관리",
                    path: "/userManagement/gardenTree"
                },
                {
                    submenuId: 6,
                    name: "다빈치+루브르 타임관리",
                    path: "/userManagement/davinchLouvre"
                },
            ]
        }
    ]
};

export default Sidebar3;