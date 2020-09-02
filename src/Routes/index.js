/**
 * Route index.js
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Helmet } from "react-helmet";

import { VisitTask, Client } from '../pages';
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import EventCalendar from '../pages/EventCalendar';
import VisitSchedule from '../pages/VisitSchedule';

import { Customers, SettlementManagement, UserManagement, AccoutManagement } from "../pages";

const MainRoutes = () => {
  return (
    // <h1>asd</h1>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/visit" component={VisitTask} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/client" component={Client} />
      <Route path="/customers" component={Customers} />
      <Route path="/eventCalendar" component={EventCalendar} />
      <Route path="/visitSchedule" component={VisitSchedule} />
      <Route path="/settlementManagement" component={SettlementManagement} />
      <Route path="/userManagement" component={UserManagement} />
      <Route path="/accountManagement" component={AccoutManagement} />
      <Route path="/*" component={NotFound} />
    </Switch>
  );
};

export default MainRoutes;
