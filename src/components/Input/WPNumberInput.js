/**
 * Number Input
 * 숫자만 입력 가능한 Input 컴포넌트
 * date: 2019-08-04
 * writer: seongwon9179@gmail.com (배성원)
 */

import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

// 숫자 패턴
const PATTERN = /[0-9]/;

const componentDefault = () => {
  // WPNumberInput prop type 정의
  WPNumberInput.propTypes = {
    size: propTypes.oneOf(['default', 'small', 'large']),
    value: propTypes.string,
    placeholder: propTypes.string,
    onChange: propTypes.func
  };

  // WPNumberInput 기본 prop 데이터 정의
  WPNumberInput.propTypes = {
    size: 'default',
    value: '',
    placeholder: '',
    onChange: () => {}
  };
};

const WPNumberInput = props => {
  const { size, placeholder, value } = props;

  const onChange = data => {
    if (PATTERN.test(data.target.value)) {
      props.onChange(data);
    }
  };

  return (
    <Input
      size={size}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

componentDefault();

export default WPNumberInput;
