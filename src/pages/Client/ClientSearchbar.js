import React from 'react';
import PropTypes from 'prop-types';
import { WPInput } from '../../components';
import { Button, Select } from 'antd';
const { Option } = Select;
const ClientSearchbar = props => {
  return (
    <div style={{ width: 'auto', float: 'right' }}>
      <Select defaultValue="all" style={{ width: 'auto' }}>
        <Option value="all">전체</Option>
        <Option value="client">업체명</Option>
        <Option value="manager">담당자</Option>
        <Option value="moblie">연락처</Option>
      </Select>
      <WPInput style={{ width: 'auto' }} />
      <Button style={{ widht: 'auto' }}>검색</Button>
    </div>
  );
};

ClientSearchbar.propTypes = {};

export default ClientSearchbar;
