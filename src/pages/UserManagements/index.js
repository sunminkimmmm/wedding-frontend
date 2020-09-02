/**
 *
 */

import React from "react";
import { Route } from "react-router-dom";
import { Container, Sidebar } from "../../components";
//계약고객
import EmployeeManagement from './basic/EmployeeManagement'
// import MenuManagement from './SettingManagement/MenuManagement'
import ItemManagement from './SettingManagement/ItemManagement'
import FoodManagement from './SettingManagement/FoodManagement'
import HallManagement from './SettingManagement/HallManagement'
import MenuSubpage01 from './MenuSubpage01';
import ItemSubpage02 from './ItemSubpage02';
import FoodSubpage03 from './FoodSubpage03';
import HallSubpage04 from './HallSubpage04';
import Time from './time/Time'
const menus = [
    {
        id: 1,
        name: "기본설정",
        submenus: [
            {
                submenuId: 1,
                name: "직원관리",
                path: "/userManagement"
            },

        ]
    },
    {
        id: 2,
        name: "설정관리",
        submenus: [
            {
                submenuId: 1,
                name: "메뉴",
                path: "/userManagement/1"
            },
            {
                submenuId: 2,
                name: "부대품목",
                path: "/userManagement/2"
            },
            {
                submenuId: 3,
                name: "식음료",
                path: "/userManagement/3"
            }, {
                submenuId: 4,
                name: "예식/행사홀관리",
                path: "/userManagement/4"
            },

        ]
    },
    {
        id: 3,
        name: "스케줄타임관리",
        submenus: [
            {
                submenuId: 1,
                name: "타임",
                path: "/userManagement/time"
            },

        ]
    }
];
const UserManagements = () => {
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
                path="/userManagement"
                component={() => <EmployeeManagement />}
            />
            <Route
                exact
                path="/userManagement/1"
                component={() => <MenuSubpage01 />}
            />
            <Route
                exact
                path="/userManagement/2"
                component={() => <ItemSubpage02 />}
            />
            <Route
                exact
                path="/userManagement/3"
                component={() => <FoodSubpage03 />}
            />
            <Route
                exact
                path="/userManagement/4"
                component={() => <HallSubpage04 />}
            />
            <Route
                exact
                path="/userManagement/time"
                component={() => <Time />}
            />
        </Container>

    );
};


export default UserManagements;
