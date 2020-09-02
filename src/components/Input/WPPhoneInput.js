/**
 * Phone Input
 * 전화번호 입력 가능한 Input 컴포넌트
 * date: 2019-08-11
 * writer: seongwon9179@gmail.com (배성원)
 */

import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

const componentDefault = () => {
  // WPPhoneInput prop type 정의
  WPPhoneInput.propTypes = {
    size: propTypes.oneOf(['default', 'small', 'large']),
    value: propTypes.string,
    placeholder: propTypes.string,
    hyphen: propTypes.bool,
    onChange: propTypes.func,
    className: propTypes.string,
    disabled: propTypes.bool
  };

  // WPPhoneInput 기본 prop 데이터 정의
  WPPhoneInput.defaultProps = {
    size: 'default',
    value: '',
    placeholder: '',
    hyphen: false,
    onChange: () => {},
    className: '',
    disabled: false
  };
};

const WPPhoneInput = props => {
  const { size, placeholder, value, className, disabled } = props;
  const [keyCode, setKeyCode] = React.useState('');
  const [filterFlag, setFilterFlag] = React.useState(true);

  const onKeyDown = e => {
    if (value.length > 12 && e.keyCode !== 8) {
      e.preventDefault();
    }

    /* 숫자만 입력 가능 */
    if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode === 8) {
      setKeyCode(e.keyCode);
      setFilterFlag(true);
    } else {
      setFilterFlag(false);
    }
  };

  const onChange = e => {
    if (filterFlag) {
      let value = e.target.value;

      if ((value.length === 3 || value.length === 8) && keyCode !== 8) {
        e.target.value += '-';
      }

      if (!props.hyphen) {
        e.target.value = e.target.value.replace('-', '');
      }

      props.onChange(e.target.value);
    }
  };

  return (
    <Input
      size={size}
      value={value}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
      className={className}
      disabled={disabled}
    />
  );
};

componentDefault();

export default WPPhoneInput;
