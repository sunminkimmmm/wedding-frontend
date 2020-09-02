/**
 * Input Radio
 *
 * date: 2019-08-18
 * writer: seongwon9179@gmail.com (배성원)
 */

import React from "react";
import propTypes from "prop-types";
import { Radio } from "antd";

const componentDefault = () => {
  // WPRadio prop type 정의
  WPRadio.propTypes = {
    value: propTypes.string,
    list: propTypes.array,
    onChange: propTypes.func
  };

  // WPRadio 기본 prop 데이터 정의
  WPRadio.defaultProps = {
    value: "",
    list: [],
    onChange: () => { }
  };
};

const WPRadio = props => {
  const { value, list } = props;

  const onChange = e => {
    props.onChange(e.target.value);
  };

  const RadioItem = list.map((e, index) => {
    return (
      <Radio
        key={index}
        value={e.value}
        style={{ color: e.color }}
        disabled={e.disabled ? true : false}
      >
        {e.message}
      </Radio>
    );
  });

  return (
    <Radio.Group onChange={onChange} value={value}>
      {RadioItem}
    </Radio.Group>
  );
};

componentDefault();

export default WPRadio;