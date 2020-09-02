import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'antd';
import { Layout } from 'antd';
const { Sider } = Layout;
const DailyTaskSidebar = () => {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <div style={{ width: 200, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar style={{ width: '200px' }} fullscreen={false} />
      </div>
    </Sider>
  );
};

export default DailyTaskSidebar;
