/**
 * Input
 *
 * date: 2019-08-04
 * writer: seongwon9179@gmail.com (배성원)
 */

import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

const componentDefault = () => {
  // WPInput prop type 정의
  WPInput.propTypes = {
    size: propTypes.oneOf(['default', 'small', 'large']),
    value: propTypes.string,
    placeholder: propTypes.string,
    onChange: propTypes.func
  };

  // WPInput 기본 prop 데이터 정의
  WPInput.defaultProps = {
    size: 'default',
    value: '',
    placeholder: '',
    onChange: () => { }
  };
};

const WPInput = props => {
  const { size, placeholder, value } = props;

  const onChange = data => {
    props.onChange(data);
  };

  return (
    <Input
      style={props.style}
      size={size}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={props.style}
    />
  );
};

componentDefault();

export default WPInput;
