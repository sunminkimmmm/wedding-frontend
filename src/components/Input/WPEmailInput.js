/**
 * Email Input
 * 이메일 입력 가능한 Input 컴포넌트
 * date: 2019-08-13
 * writer: seongwon9179@gmail.com (배성원)
 */

import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { Input, Select } from 'antd';

const { Option } = Select;
const { InputGroup } = Input.Group;

const componentDefault = () => {
  // WPPhoneInput prop type 정의
  WPEmailInput.propTypes = {
    size: propTypes.oneOf(['default', 'small', 'large']),
    value: propTypes.string,
    placeholder: propTypes.string,
    emailList: propTypes.array,
    onChange: propTypes.func
  };

  // WPPhoneInput 기본 prop 데이터 정의
  WPEmailInput.defaultProps = {
    size: 'default',
    value: '',
    placeholder: '',
    emailList: ['naver.com', 'daum.net', 'google.com', '직접입력'],
    onChange: () => {}
  };
};

const WPEmailInput = props => {
  const { size, placeholder, value, emailList } = props;
  const [email, setEmail] = React.useState('');
  const [emailId, setEmailId] = React.useState('');
  const emailOption = emailList.map((mail, index) => (
    <Option key={index} value={mail}>
      {mail}
    </Option>
  ));

  const onChange = e => {
    if (e.target.value !== '@') {
      let result = e.target.value + '@' + email;
      setEmailId(e.target.value);
      props.onChange(result);
    }
  };

  const emailInputOnChange = e => {
    setEmail(e.target.value);
    let result = emailId + '@' + e.target.value;
    props.onChange(result);
  };

  const selectOnChange = e => {
    if (e == '직접입력') {
      setEmail('');
    } else {
      setEmail(e);
    }

    let result = emailId + '@' + email;
    props.onChange(result);
  };

  const selectEmail = (
    <Select
      defaultValue="직접입력"
      onChange={selectOnChange}
      style={{ width: 120 }}
    >
      {emailOption}
    </Select>
  );

  const filterValue = e => {
    return e.replace(/@.*/gi, '');
  };

  return (
    <Fragment>
      <Input.Group size={size}>
        <Input style={{ width: '35%' }} onChange={onChange} />
        <Input
          style={{ width: '65%' }}
          addonAfter={selectEmail}
          value={email}
          placeholder={placeholder}
          onChange={emailInputOnChange}
        />
      </Input.Group>
    </Fragment>
  );
};

componentDefault();

export default WPEmailInput;
