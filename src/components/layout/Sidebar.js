/**
 *
 */

import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from 'react-router-dom'
import WeddingCustomerModal from './WeddingCustomerModal';
const { SubMenu } = Menu;
const { Sider } = Layout;



const Sidebar = props => {
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

Sidebar.defaultProps = {
  mainItemKey: "name",
  subItemKey: "name",
  linkKey: "path",
  subItemsKey: "submenus",
  menu: [
    {
      id: 1,
      name: "계약고객(전체)",
      path: "/customers/contactTotalCustomer",
      submenus: [
        {
          submenuId: 1,
          name: "예식고객",
          path: "/customers/contactWeddingCustomer"
        },
        {
          submenuId: 2,
          name: "행사고객",
          path: "/customers/contactEventCustomer"
        },
        {
          submenuId: 3,
          name: "취소고객",
          path: "/customers/contactCancelCustomer"
        },
        {
          submenuId: 4,
          name: "삭제고객",
          path: "/customers/contactDeleteCustomer"
        }
      ]
    },
    {
      id: 2,
      name: "고객등록",
      submenus: [
        {
          submenuId: 1,
          name: <WeddingCustomerModal />,

        },
        {
          submenuId: 2,
          name: '행사고객등록',

        }
      ]
    },
    {
      id: 3,
      name: "발주관리",
      submenus: [
        {
          submenuId: 1,
          name: "발주내역",
          path: "/customers/orderDetailStatus"
        },
        {
          submenuId: 2,
          name: "FAX 전송내역",
          path: "/customers/faxTransmissionDetail"
        }
      ]
    },
    {
      id: 4,
      name: "상담고객(전체)",
      path: '/customers/consultTotalCustomer',
      submenus: [
        {
          submenuId: 1,
          name: "신규고객",
          path: "/customers/consultNewCustomer"
        },
        {
          submenuId: 2,
          name: "유망고객",
          path: "/customers/consultProspectiveCustomer"
        },
        {
          submenuId: 3,
          name: "보류고객",
          path: "/customers/consultHoldCustomer"
        },
        {
          submenuId: 4,
          name: "포기고객",
          path: "/customers/consultRenunciationCustomer"
        }
      ]
    },
    {
      id: 5,
      name: "방문상담",
      submenus: [
        {
          submenuId: 1,
          name: "방문상담내역",
          path: "/customers/visitConsultDetail"
        },
        {
          submenuId: 2,
          name: "상담고객등록",
        }
      ]
    }
  ]
};

export default Sidebar;
