
import React from "react";
import { Route } from "react-router-dom";
import { Container, Sidebar2 } from "../../components";
import Subpage01 from "./Subpage01";
import Subpage02 from './Subpage02';
import Subpage03 from './Subpage03';
import Subpage04 from './Subpage04';
import Subpage05 from './Subpage05';

const SettlementMangement = () => {
    return (
        <Container card sider siderRender={<Sidebar2 />}>
            <Route exact path="/settlementManagement" component={Subpage01} />
            <Route path="/settlementManagement/weddingSettlement" component={Subpage01} />
            <Route path="/settlementManagement/eventSettlement" component={Subpage02} />
            <Route path="/settlementManagement/libert" component={Subpage03} />
            <Route path="/settlementManagement/orderDetails" component={Subpage04} />
            <Route path="/settlementManagement/orderSettlement" component={Subpage05} />
        </Container>
    );
};

export default SettlementMangement;
