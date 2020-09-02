/**
 * Number Input
 * 숫자만 입력 가능한 Input 컴포넌트
 * date: 2019-08-04
 * writer: seongwon9179@gmail.com (배성원)
 */

import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

const componentDefault = () => {
  // WPNumberInput prop type 정의
  WPNumberInput.propTypes = {
    size: propTypes.oneOf(['default', 'small', 'large']),
    value: propTypes.string,
    placeholder: propTypes.string,
    className: propTypes.string,
    onChange: propTypes.func
  };

  // WPNumberInput 기본 prop 데이터 정의
  WPNumberInput.defaultProps = {
    size: 'default',
    value: '',
    placeholder: '',
    className: '',
    onChange: () => {}
  };
};

const WPNumberInput = props => {
  const { size, placeholder, value, className } = props;

  const onChange = e => {
    let value = e.target.value;
    if (!isNaN(value)) {
      props.onChange(e.target.value);
    }
  };

  return (
    <Input
      size={size}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

componentDefault();

export default WPNumberInput;
