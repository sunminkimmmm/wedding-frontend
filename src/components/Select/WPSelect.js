import React from 'react';
import propTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const componentDefault = () => {
  WPSelect.propTypes = {
    list: propTypes.array,
    defaultValue: propTypes.string,
    size: propTypes.string
  };

  WPSelect.defaultProps = {
    list: [],
    defaultValue: '',
    size: 'default'
  };
};

const WPSelect = props => {
  const renderList = list => {
    return list.map(item => {
      return (
        <Option key={item.key} value={item.value}>
          {item.name}
        </Option>
      );
    });
  };

  return (
    <Select
      className={props.className}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      size={props.size}
      style={props.style}
    >
      {renderList(props.list)}
    </Select>
  );
};

componentDefault();

export default WPSelect;
