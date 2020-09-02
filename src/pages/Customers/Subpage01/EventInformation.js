import React from 'react';
import PropTypes from 'prop-types';
import { Descriptions, Select } from 'antd';
import { WPInput, WPRadio } from '../../../components';
import WPDatePicker from '../../../components/Date/WPDatePicker';
const { Option } = Select;

const EventInformation = props => {
  return (
    <Descriptions title="행사정보">
      <Descriptions.Item label="행사일" span={3}>
        <WPDatePicker />
      </Descriptions.Item>
      <Descriptions.Item label="연회홀" span={2}>
        <Select defaultValue="null">
          {props.eventHalls.map((item, index) => {
            return (
              <Option
                key={item.id}
                value={props.eventHall}
                handleChangeEventHall={props.handleChangeEventHall}
              >
                {item.hallName}
              </Option>
            );
          })}
        </Select>
      </Descriptions.Item>
      <Descriptions.Item label="연회시간">
        <Select>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
          <Option value="11">11</Option>
          <Option value="12">12</Option>
        </Select>
        시
        <Select>
          <Option value="0">0</Option>
          <Option value="10">10</Option>
          <Option value="20">20</Option>
          <Option value="30">30</Option>
          <Option value="40">40</Option>
          <Option value="50">50</Option>
        </Select>
        분 ~
        <Select>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
          <Option value="11">11</Option>
          <Option value="12">12</Option>
        </Select>
        시
        <Select>
          <Option value="0">0</Option>
          <Option value="10">10</Option>
          <Option value="20">20</Option>
          <Option value="30">30</Option>
          <Option value="40">40</Option>
          <Option value="50">50</Option>
        </Select>
        분
      </Descriptions.Item>
    </Descriptions>
  );
};

EventInformation.propTypes = {};

export default EventInformation;
