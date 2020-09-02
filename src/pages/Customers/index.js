/**
 *
 */

import React from "react";
import { Route } from "react-router-dom";
import { Container, Sidebar } from "../../components";
//계약고객
import WeddingCustomers from "./ContactCustomer/WeddingCustomers"
import EventCustomers from "./ContactCustomer/EventCustomers"
import CancelCustomers from "./ContactCustomer/CancelCustomers"
import DeleteCustomers from "./ContactCustomer/DeleteCustomers";
//상담고객
import ConsultTotalCustomers from './ConsultCustomer/TotalConsultCustomer';
import NewCustomers from './ConsultCustomer/NewCustomers';
import ProspectiveCustomers from './ConsultCustomer/ProspectiveCustomers'
import HoldCustomers from './ConsultCustomer/HoldCustomers';
import RenunciationCustomers from './ConsultCustomer/RenunciationCustomers';
//계약고객(antd)
import TotalContactCustomer from './ContactCustomer/TotalContactCustomer'
import ConsultCustomerRegister from './ConsultationModal'
import ContactEventCustomerRegister from './Subpage01'
import ContactWeddingCustomerRegister from './MarryRegistrationModal'
const menus = [
  {
    id: 1,
    name: "고객관리",
    path: "/customers",
    submenus: [
      {
        submenuId: 1,
        name: "예식고객",
        path: "/customers/wedding"
      },
      {
        submenuId: 2,
        name: "행사고객",
        path: "/customers/event"
      },
      {
        submenuId: 3,
        name: "취소고객",
        path: "/customers/cancel"
      },
      {
        submenuId: 4,
        name: "삭제고객",
        path: "/customers/delete"
      }
    ]
  },
  {
    id: 2,
    name: "고객등록",
    submenus: [
      {
        submenuId: 1,
        name: "예식계약고객등록",
        path: "/customers/register3"
      },
      {
        submenuId: 2,
        name: "행사계약고객등록",
        path: "/customers/register1"
      },
      {
        submenuId: 3,
        name: "상담고객등록",
        path: "/customers/register2"
      }
    ]
  },
  {
    id: 3,
    name: "상담고객",
    path: '/customers/consult',
    submenus: [
      {
        submenuId: 1,
        name: "신규고객",
        path: "/customers/new"
      },
      {
        submenuId: 2,
        name: "유망고객",
        path: "/customers/prospective"
      },
      {
        submenuId: 3,
        name: "보류고객",
        path: "/customers/hold"
      }, {
        submenuId: 4,
        name: "포기고객",
        path: "/customers/renunciation"
      }
    ]
  }
];
const Customers = () => {
  return (
    <Container
      card
      sider
      siderRender={
        <Sidebar
          mainItemKey="name"
          subItemKey="name"
          subItemsKey="submenus"
          menu={menus}
        />
      }
    >
      <Route
        exact
        path="/customers"
        component={() => <TotalContactCustomer />}
      />
      <Route
        exact
        path="/customers/wedding"
        component={() => <WeddingCustomers />}
      />
      <Route
        exact
        path="/customers/event"
        component={() => <EventCustomers />}
      />
      <Route
        exact
        path="/customers/cancel"
        component={() => <CancelCustomers />}
      />
      <Route
        exact
        path="/customers/delete"
        component={() => <DeleteCustomers />}
      />
      <Route
        exact
        path="/customers/consult"
        component={() => <ConsultTotalCustomers />}
      />
      <Route
        exact
        path="/customers/new"
        component={() => <NewCustomers />}
      />
      <Route
        exact
        path="/customers/prospective"
        component={() => <ProspectiveCustomers />}
      />
      <Route
        exact
        path="/customers/hold"
        component={() => <HoldCustomers />}
      />
      <Route
        exact
        path="/customers/renunciation"
        component={() => <RenunciationCustomers />}
      />
      <Route
        exact
        path="/customers/register1"
        component={ContactEventCustomerRegister}
      />
      <Route
        exact
        path="/customers/register2"
        component={ConsultCustomerRegister}
      />
      <Route
        exact
        path="/customers/register3"
        component={ContactWeddingCustomerRegister}
      />
    </Container>

  );
};


export default Customers;
