
import React from "react";
import { Route } from "react-router-dom";
import { Container, Sidebar3 } from "../../components";
import Subpage01 from "./Subpage01";
import Subpage02 from './Subpage02';
import Subpage03 from './Subpage03';
import Subpage04 from './Subpage04';
import Subpage05 from './Subpage05';
import Subpage06 from "./Subpage06";
import Subpage07 from './Subpage07';
import Subpage08 from './Subpage08';
import Subpage09 from './Subpage09';
import Subpage10 from './Subpage10';
import Subpage11 from './Subpage11';
import Subpage12 from './Subpage12';

const UserMangement = () => {
    return (
        <Container card sider siderRender={<Sidebar3 />}>
            <Route exact path="/userManagement" component={Subpage01} />
            <Route path="/userManagement/staffManagement" component={Subpage01} />
            <Route path="/userManagement/connectedLogo" component={Subpage02} />
            <Route path="/userManagement/menuManagement" component={Subpage03} />
            <Route path="/userManagement/itemManagement" component={Subpage04} />
            <Route path="/userManagement/foodManagement" component={Subpage05} />
            <Route path="/userManagement/hallManagement" component={Subpage06} />
            <Route path="/userManagement/tree" component={Subpage07} />
            <Route path="/userManagement/davinch" component={Subpage08} />
            <Route path="/userManagement/louvre" component={Subpage09} />
            <Route path="/userManagement/vivaldi" component={Subpage10} />
            <Route path="/userManagement/gardenTree" component={Subpage11} />
            <Route path="/userManagement/davinchLouvre" component={Subpage12} />
        </Container>
    );
};

export default UserMangement;
