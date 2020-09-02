/**
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { Container, Sidebar } from '../../components';
import { Switch } from 'react-router-dom';
import ClientContainer from './ClientContainer';
const Client = () => {
  return (
    <Container card sider siderRender={<Sidebar />}>
      <Switch>
        <Route path="/" component={ClientContainer} />
      </Switch>
    </Container>
  );
};

export default Client;
