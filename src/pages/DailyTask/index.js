/**
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '../../components';
import 'antd';
import DailyTaskContainer from './DailyTaskContainer';
import { Switch } from 'react-router-dom';
import DailyTaskSidebar from './DailyTaskSidebar';
const DailyTask = () => {
  return (
    <Container card sider siderRender={<DailyTaskSidebar />}>
      <Switch>
        <Route path="/daily" component={DailyTaskContainer} />
      </Switch>
    </Container>
  );
};

export default DailyTask;
