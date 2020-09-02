/**
 * PeriodDatePicker
 *
 * date: 2019-08-04
 * writer: seongh7800@gmail.com
 */

import React from "react";
import propTypes from "prop-types";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

/**
 *
 */
const componentDefault = () => {
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
    onChange: v => {}
  };
};

/**
 * DatePicker
 */
const WPDatePicker = props => {
  const { size, type, value } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (date, dateString) => {
    if (type === "string") props.onChange(dateString);
    else if (type === "date") props.onChange(date);
    else props.onChange(date, dateString);
  };

  return (
    <RangePicker
      size={size}
      value={
        value && [moment(value[0], dateFormat), moment(value[1], dateFormat)]
      }
      open={isOpen}
      onChange={onChange}
      onOpenChange={toggleOpen}
    />
  );
};

componentDefault();
export default WPDatePicker;
