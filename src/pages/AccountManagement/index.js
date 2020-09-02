
import React from "react";
import { Route } from "react-router-dom";
import { Container, Sidebar4 } from "../../components";
import Subpage01 from "./Subpage01";
import Subpage02 from "./Subpage02";
import Subpage03 from "./Subpage03";
import Subpage04 from "./Subpage04";
import Subpage05 from "./Subpage05";
import Subpage06 from "./Subpage06";

const AccoutManagement = () => {
    return (
        <Container card sider siderRender={<Sidebar4 />}>
            <Route exact path="/accountManagement" component={Subpage01} />
            <Route path="/accountManagement/total" component={Subpage01} />
            <Route path="/accountManagement/weddingConsulting" component={Subpage02} />
            <Route path="/accountManagement/studios" component={Subpage03} />
            <Route path="/accountManagement/dress" component={Subpage04} />
            <Route path="/accountManagement/makeUp" component={Subpage05} />
            <Route path="/accountManagement/etc" component={Subpage06} />
        </Container>
    );
};

export default AccoutManagement;
