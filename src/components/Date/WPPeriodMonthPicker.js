/**
 * PeriodDatePicker
 *
 * date: 2019-08-04
 * writer: seongh7800@gmail.com
 */

import React from "react";
import propTypes from "prop-types";
import { DatePicker } from "antd";
// import moment from "moment";

const { RangePicker } = DatePicker;
// const monthFormat = "YYYY-MM";

const compnentDefault = () => {
  /* Default Types */
  WPDatePicker.propTypes = {
    size: propTypes.oneOf(["default", "small", "large"]),
    type: propTypes.oneOf(["string", "date", "all"]),
    value: propTypes.array,
    onChange: propTypes.func
  };

  /* Default value */
  WPDatePicker.defaultProps = {
    size: "default",
    type: "string",
    value: [],
    onChange: () => { }
  };
};

/**
 * DatePicker
 */
const WPDatePicker = props => {
  const {
    size,
    // type,
    value
  } = props;
  // const [isOpen, setIsOpen] = React.useState(false);
  const [mode, setMode] = React.useState(["month", "month"]);

  const handlePanelChange = (value, m) => {
    console.log("M : ", m);

    setMode(["month", "month"]);
    props.onChange(value);
  };

  return (
    <RangePicker
      size={size}
      placeholder={["Start month", "End month"]}
      format="YYYY-MM"
      value={value}
      mode={mode}
      onPanelChange={handlePanelChange}
    />
  );
};

compnentDefault();
export default WPDatePicker;
