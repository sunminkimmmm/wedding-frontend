/**
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { Container, Sidebar } from '../../components';
import VistTaskContainer from './VisitTaskContainer';
import { Switch } from 'react-router-dom';
import VisitTaskContainer from './VisitTaskContainer';
const VisitTask = () => {
  return (
    <Container card sider siderRender={<Sidebar />}>
      <Switch>
        <Route path="/" component={VisitTaskContainer} />
      </Switch>
    </Container>
  );
};

export default VisitTask;
